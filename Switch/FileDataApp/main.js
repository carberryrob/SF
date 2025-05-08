const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

// Converts a single glob pattern to RegExp
function globToRegex(pattern) {
    const escaped = pattern.replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
    const regexStr = '^' + escaped
        .replace(/\*/g, '.*')
        .replace(/\?/g, '.') + '$';
    return new RegExp(regexStr, 'i');
}

// Checks if filename matches any of the provided patterns
function matchAnyPattern(filename, patterns) {
    return patterns.some(p => globToRegex(p).test(filename));
}

// Recursively get all PDF files from a folder (including subfolders)
function getPdfFilesRecursively(dir, patterns, s) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            results = results.concat(getPdfFilesRecursively(filePath, patterns, s)); // Recurse into subdir
        } else if (matchAnyPattern(file, patterns)) {
            results.push(filePath); // If it matches the pattern, add it to results
        }
    });
    return results;
}

// Format date with the selected pattern (Local or UTC)
function formatDate(date, format, s, datetimeFormat) {
    const validTokens = ['yyyy', 'MM', 'dd', 'HH', 'mm', 'ss', 'zzz'];  // Changed 'SSS' to 'zzz'
    const containsValidToken = validTokens.some(token => format.includes(token));

    if (!containsValidToken) {
        s.log(2, `Invalid timestamp format: "${format}". Falling back to ISO 8601.`);
        return datetimeFormat === "UTC" ? date.toISOString() : date.toLocaleString();
    }

    const map = {
        'yyyy': date.getFullYear(),
        'MM': String(date.getMonth() + 1).padStart(2, '0'),
        'dd': String(date.getDate()).padStart(2, '0'),
        'HH': String(date.getHours()).padStart(2, '0'),
        'mm': String(date.getMinutes()).padStart(2, '0'),
        'ss': String(date.getSeconds()).padStart(2, '0'),
        'zzz': String(date.getMilliseconds()).padStart(3, '0') // Changed 'SSS' to 'zzz'
    };

    let formattedDate = format.replace(/yyyy|MM|dd|HH|mm|ss|zzz/g, match => map[match]);  // Updated to use 'zzz'

    // If UTC is selected, format accordingly
    if (datetimeFormat === "UTC") {
        formattedDate = new Date(date).toISOString().replace("T", " ").replace("Z", "");
    }

    return formattedDate;
}

function jobArrived(s, flowElement, job) {
    const inputDir = flowElement.getPropertyValue("PDF folder path");
    const rawPattern = flowElement.getPropertyValue("File filter pattern") || "*.pdf";
    const outputFormat = flowElement.getPropertyValue("Output format");
    const outputBaseName = flowElement.getPropertyValue("Output file name") || "pdf_metadata";
    const timestampFormat = flowElement.getPropertyValue("Timestamp format") || "MM/dd/yyyy HH:mm:ss.zzz";
    const enableRecursiveSearch = flowElement.getPropertyValue("Enable recursive search") === "true"; // Toggle for recursion
    const datetimeFormat = flowElement.getPropertyValue("Datetime format") || "Local"; // New property for datetime format

    // Example of accessing job metadata and environment variables
    const jobId = job.getJobID(); // Job ID
    const customMetadata = job.getMetadata("CustomKey"); // Custom metadata (if any)
    const myEnvVar = process.env["MY_ENV_VAR"]; // Example of accessing environment variable

    s.log(1, `Job ID: ${jobId}`);
    s.log(1, `Custom Metadata: ${customMetadata}`);
    s.log(1, `Environment Variable MY_ENV_VAR: ${myEnvVar}`);

    if (!fs.existsSync(inputDir)) {
        s.log(1, `Input folder does not exist: ${inputDir}`);
        job.sendToNull();
        return;
    }

    const patternList = rawPattern.split(/[;,]+/).map(p => p.trim()).filter(Boolean);
    const files = fs.readdirSync(inputDir);

    // Conditional logic based on the "Enable recursive search" toggle
    const pdfFiles = enableRecursiveSearch 
        ? getPdfFilesRecursively(inputDir, patternList, s) 
        : files.filter(f => matchAnyPattern(f, patternList)).map(f => path.join(inputDir, f));

    const metadataList = pdfFiles.map(filePath => {
        const stats = fs.statSync(filePath);
        const fileName = path.basename(filePath);
        return {
            fullPath: filePath,
            fileName: fileName,
            modifiedTime: formatDate(stats.mtime, timestampFormat, s, datetimeFormat),
            sizeBytes: stats.size
        };
    });

    let outputContent, extension;

    if (outputFormat === "JSON") {
        outputContent = JSON.stringify(metadataList, null, 2);
        extension = ".json";
    } else {
        const builder = new xml2js.Builder({ rootName: "pdfFiles", headless: true });
        outputContent = builder.buildObject({ file: metadataList });
        extension = ".xml";
    }

    const tempFolder = flowElement.getTempPath();
    const fullOutputPath = path.join(tempFolder, outputBaseName + extension);

    fs.writeFileSync(fullOutputPath, outputContent, "utf-8");

    const metadataJob = flowElement.createJob(fullOutputPath);
    s.sendToSingle(metadataJob, flowElement.getPathElementName(0));
    job.sendToNull();
}

function jobRemoved(s, flowElement, job) {
    // Not used
}
