var press_sheet_size = (job.getPrivateData("press_sheet_size") || "");  // e.g., "25x19"
var swapped_size = press_sheet_size;

if (press_sheet_size.includes("x")) {
    var parts = press_sheet_size.split("x");
    if (parts.length === 2) {
        swapped_size = parts[1] + "x" + parts[0];
    }
}

swapped_size;




function manualTrim(s) {
    return s.replace(/^\s+/, '').replace(/\s+$/, '');
}

var allowed = false;

var page_count = Number(job.getPrivateData("page_count") || 0);
var RunMethod = (job.getPrivateData("RunMethod") || "").toUpperCase();
if (page_count > 1 && RunMethod === "SHEETWISE") {
    allowed = true;
}


var template_number = (job.getPrivateData("template_number") || "").toUpperCase();
template_number = manualTrim((template_number + "").toUpperCase());
var template = ["DD-STICKER_SINGLES"];
for (var i = 0; i < template.length; i++) {
    var entry = manualTrim((template[i] + "").toUpperCase());
    if (entry === template_number) {
        allowed = false;
        break;
    }
}

var press_type = (job.getPrivateData("press_type") || "").toUpperCase();
var press = ["HPiJet","WIL-Delphax"];
for (var i = 0; i < press.length; i++) {
    var entry = manualTrim((press[i] + "").toUpperCase());
    if (entry === press_type) {
        allowed = false;
        break;
    }
}
allowed;






var templatePD = job.getPrivateData("template_number");
templatePD = manualTrim((templatePD + "").toUpperCase());


