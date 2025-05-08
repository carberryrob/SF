const fs = require("fs").promises;
const path = require("path");

// Convert glob pattern to RegExp
function globToRegex(pattern) {
    const escaped = pattern.replace(/[-[\]{}()+.,\\^$|#\s]/g, '\\$&');
    return new RegExp("^" + escaped.replace(/\*/g, ".*").replace(/\?/g, ".") + "$", "i");
}

function matchAnyPattern(filename, patterns) {
    return patterns.some(p => {
        try {
            return globToRegex(p).test(filename);
        } catch {
            return false;
        }
    });
}

async function getFilesRecursively(dir, patterns) {
    let results = [];
    const list = await fs.readdir(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);
        if (stats.isDirectory()) {
            results = results.concat(await getFilesRecursively(filePath, patterns));
        } else if (matchAnyPattern(file, patterns)) {
            results.push(filePath);
        }
    }
    return results;
}

function formatDate(date, format, datetimeFormat) {
    const dt = datetimeFormat === "UTC" ? new Date(date.toUTCString()) : date;
    const map = {
        'yyyy': dt.getFullYear(),
        'MM': String(dt.getMonth() + 1).padStart(2, '0'),
        'dd': String(dt.getDate()).padStart(2, '0'),
        'HH': String(dt.getHours()).padStart(2, '0'),
        'mm': String(dt.getMinutes()).padStart(2, '0'),
        'ss': String(dt.getSeconds()).padStart(2, '0'),
        'zzz': String(dt.getMilliseconds()).padStart(3, '0')
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss|zzz/g, match => map[match]);
}

function escapeXml(str) {
    return str.replace(/[<>&'"]/g, c => ({
        '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'
    }[c]));
}

function buildXml(metadataList) {
    let xml = `<pdfFiles>\n`;
    metadataList.forEach(file => {
        xml += `  <file>\n`;
        xml += `    <fullPath>${escapeXml(file.fullPath)}</fullPath>\n`;
        xml += `    <fileName>${escapeXml(file.fileName)}</fileName>\n`;
        xml += `    <modifiedTime>${escapeXml(file.modifiedTime)}</modifiedTime>\n`;
        xml += `    <sizeBytes>${file.sizeBytes}</sizeBytes>\n`;
        xml += `  </file>\n`;
    });
    xml += `</pdfFiles>\n`;
    return xml;
}

async function jobArrived(s, flowElement, job) {
    return new Promise(async (resolve, reject) => {
        try {
            const inputDir = "D:\\Data\\Celebration Mailer\\Art\\Art_Repository"; // Path to the input folder
            const rawPattern = "*.pdf"; // File pattern to match
            const outputFormat = "JSON"; // Output format (JSON)
            const outputBaseName = "test.json"; // Output file name
            const timestampFormat = "MM/dd/yyyy HH:mm:ss.zzz"; // Timestamp format
            const enableRecursiveSearch = "false"; // Whether to search recursively (false in this case)
            const datetimeFormat = "Local"; // Datetime format

            const patternList = rawPattern.split(/[;,]+/).map(p => p.trim()).filter(Boolean);

            // Read and match files
            const matchedFiles = enableRecursiveSearch === "true"
                ? await getFilesRecursively(inputDir, patternList)
                : (await fs.readdir(inputDir))
                    .filter(f => matchAnyPattern(f, patternList))
                    .map(f => path.join(inputDir, f));

            // Get file metadata
            const metadataList = await Promise.all(matchedFiles.map(async (filePath) => {
                const stats = await fs.stat(filePath);
                return {
                    fullPath: filePath,
                    fileName: path.basename(filePath),
                    modifiedTime: formatDate(stats.mtime, timestampFormat, datetimeFormat),
                    sizeBytes: stats.size
                };
            }));

            // Prepare output content
            let outputContent = "";
            let extension = "";

            if (outputFormat.toUpperCase() === "JSON") {
                outputContent = JSON.stringify(metadataList, null, 2);
                extension = ".json";
            } else {
                outputContent = buildXml(metadataList);
                extension = ".xml";
            }

            const tempPath = flowElement.getTempPath(); // Assuming flowElement has a method to get temp path
            const fullOutputPath = path.join(tempPath, outputBaseName + extension);

            // Write to file
            await fs.writeFile(fullOutputPath, outputContent, "utf8");

            // Create result job and send it to the next element
            const resultJob = flowElement.createJob(fullOutputPath);
            await s.sendToSingle(resultJob, flowElement.getPathElementName(0));

            // Send job to null (mark it as processed)
            await job.sendToNull(); // Ensure this is the final operation!

            resolve(); // Explicitly resolve the promise when the job is finished
        } catch (err) {
            console.error("Script error:", err.stack || err.message); // Log error for debugging
            if (job && typeof job.sendToNull === "function") {
                await job.sendToNull(); // Ensure job is marked as processed even on error
            }
            reject(err); // Reject the promise in case of an error
        }
    });
}

function jobRemoved(s, flowElement, job) {
    // Not used
}
