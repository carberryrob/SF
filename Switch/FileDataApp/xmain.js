const fs = require("fs");
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

function getFilesRecursively(dir, patterns) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            results = results.concat(getFilesRecursively(filePath, patterns));
        } else if (matchAnyPattern(file, patterns)) {
            results.push(filePath);
        }
    });
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

function jobArrived(s, flowElement, job) {
    try {
        s.log(3, "🔍 Script started");

        const inputDir = flowElement.getPropertyStringValue("PDF_folder_path");
        const rawPattern = flowElement.getPropertyStringValue("File_filter_pattern") || "*.pdf";
        const outputFormat = flowElement.getPropertyStringValue("Output_-format") || "XML";
        const outputBaseName = flowElement.getPropertyStringValue("Output_file_name") || "pdf_metadata";
        const timestampFormat = flowElement.getPropertyStringValue("Timestamp_format") || "MM/dd/yyyy HH:mm:ss.zzz";
        const enableRecursiveSearch = (flowElement.getPropertyStringValue("Enable_recursive_search") || "").toLowerCase() === "true";
        const datetimeFormat = "Local"; // Fixed for now
        const tempPath = flowElement.getTempPath();

        if (!fs.existsSync(inputDir)) {
            s.log(1, `❌ Input folder does not exist: ${inputDir}`);
            job.sendToNull();
            return;
        }

        const patternList = rawPattern.split(/[;,]+/).map(p => p.trim()).filter(Boolean);
        const matchedFiles = enableRecursiveSearch
            ? getFilesRecursively(inputDir, patternList)
            : fs.readdirSync(inputDir)
                .filter(f => matchAnyPattern(f, patternList))
                .map(f => path.join(inputDir, f));

        s.log(3, `📄 Found ${matchedFiles.length} matching files.`);

        const metadataList = matchedFiles.map(filePath => {
            const stats = fs.statSync(filePath);
            return {
                fullPath: filePath,
                fileName: path.basename(filePath),
                modifiedTime: formatDate(stats.mtime, timestampFormat, datetimeFormat),
                sizeBytes: stats.size
            };
        });

        let outputContent = "";
        let extension = "";

        if (outputFormat.toUpperCase() === "JSON") {
            outputContent = JSON.stringify(metadataList, null, 2);
            extension = ".json";
        } else {
            outputContent = buildXml(metadataList);
            extension = ".xml";
        }

        const fullOutputPath = path.join(tempPath, outputBaseName + extension);
        fs.writeFileSync(fullOutputPath, outputContent, "utf8");

        const resultJob = flowElement.createJob(fullOutputPath);
        s.sendToSingle(resultJob, flowElement.getPathElementName(0));
        job.sendToNull();

        s.log(3, `✅ Metadata file written: ${fullOutputPath}`);

    } catch (err) {
        s.log(1, `💥 Script error: ${err.stack || err.message}`);
        if (job && typeof job.sendToNull === "function") {
            job.sendToNull();
        }
    }
}

function jobRemoved(s, flowElement, job) {
    // Not used
}
