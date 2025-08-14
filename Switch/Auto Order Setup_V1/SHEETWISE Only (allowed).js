var page_count = Number(job.getPrivateData("page_count") || 0);
var RunMethod = (job.getPrivateData("RunMethod") || "").toUpperCase();
var allowed = false;

if (page_count > 1 && RunMethod === "SHEETWISE") {
    allowed = true;
}

allowed;
