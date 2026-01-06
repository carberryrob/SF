// JS 1.0 Script Expression using JSON rules from PD key: impo_rules

// --- Helpers ---
function ptsToIn(pts) {
    return Number(pts || 0) / 72;
}

// Compare inches with 1-point tolerance (PDF trim rounding safe)
function inEq(aIn, bIn) {
    return Math.abs(Number(aIn) - Number(bIn)) <= (1 / 72); // 1 pt in inches
}

// Safe read for optional rule fields (some Switch JS engines throw on missing members)
function tryGet(obj, key) {
    try {
        return obj[key]; // may throw in some Switch JS environments if missing
    } catch (e) {
        return undefined;
    }
}

// --- Read job PD (pts -> inches) ---
var impo      = String(job.getPrivateData("impo") || "").replace(/^\s+|\s+$/g, "");
var widthIn   = ptsToIn(job.getPrivateData("width"));
var heightIn  = ptsToIn(job.getPrivateData("height"));
var pageCount = Number(job.getPrivateData("page_count") || 0);

// --- Load rules JSON from PD ---
var rulesJson = String(job.getPrivateData("impo_rules") || "").replace(/^\s+|\s+$/g, "");
var RULES = [];

try {
    RULES = JSON.parse(rulesJson || "[]");
} catch (e) {
    RULES = [];
}

// Default output
var output = impo;

// --- Evaluate rules ---
for (var i = 0; i < RULES.length; i++) {
    var r = RULES[i];
    if (!r) continue;

    // required fields
    if (impo !== String(tryGet(r, "impo") || "")) continue;
    if (!inEq(widthIn,  tryGet(r, "w"))) continue;
    if (!inEq(heightIn, tryGet(r, "h"))) continue;

    // optional page rules (safe)
    var pagesVal = tryGet(r, "pages");
    if (pagesVal !== undefined && pagesVal !== null && String(pagesVal) !== "") {
        if (pageCount !== Number(pagesVal)) continue;
    }

    var minPagesVal = tryGet(r, "minPages");
    if (minPagesVal !== undefined && minPagesVal !== null && String(minPagesVal) !== "") {
        if (pageCount < Number(minPagesVal)) continue;
    }

    // result
    output = String(tryGet(r, "result") || impo);
    break;
}

// Return
output;
