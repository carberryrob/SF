// ===============================
// RULES (edit/add here only)
// ===============================
var RULES = [
    {
        impo: "KM1_25x19_SaddleStitched_SHEETWISE_B_NS_2S",
        w: 4,
        h: 8.5,
        pages: 4, // EXACT page count
        result: "KM1_25x19_SaddleStitched_SHEETWISE_B_NS_2S (4x8.5)"
    },
    {
        impo: "KM2_25x19_SaddleStitched_SHEETWISE_B_NS_2S",
        w: 4,
        h: 8.5,
        minPages: 3, // 3+
        result: "KM2_25x19_SaddleStitched_SHEETWISE_B_NS_2S (4x8.5)"
    }
];

// ===============================
// HELPERS
// ===============================
function ptsToIn(pts) {
    return Number(pts || 0) / 72;
}

// Compare inches with 1-point tolerance (PDF trim rounding safe)
function inEq(aIn, bIn) {
    var tolIn = 1 / 72; // 1 pt in inches
    return Math.abs(Number(aIn) - Number(bIn)) <= tolIn;
}

// ===============================
// READ PRIVATE DATA (pts → inches)
// ===============================
var impo      = String(job.getPrivateData("impo") || "").replace(/^\s+|\s+$/g, "");
var widthIn   = ptsToIn(job.getPrivateData("width"));
var heightIn  = ptsToIn(job.getPrivateData("height"));
var pageCount = Number(job.getPrivateData("page_count") || 0);

// Default output
var output = impo;

// ===============================
// RULE EVALUATION
// ===============================
for (var i = 0; i < RULES.length; i++) {
    var r = RULES[i];

    if (impo !== r.impo) continue;
    if (!inEq(widthIn,  r.w)) continue;
    if (!inEq(heightIn, r.h)) continue;

    // page rules (optional)
    if (r.pages    !== undefined && pageCount !== r.pages)    continue;
    if (r.minPages !== undefined && pageCount <  r.minPages)  continue;

    output = r.result;
    break; // first match wins
}

// ===============================
// RETURN VALUE
// ===============================
output;



[
  {
    "impo": "KM1_25x19_SaddleStitched_SHEETWISE_B_NS_2S",
    "w": 4,
    "h": 8.5,
    "minPages": 3,
    "result": "KM1_25x19_SaddleStitched_SHEETWISE_B_NS_2S (4x8.5)"
  },
  {
    "impo": "KM2_25x19_SaddleStitched_SHEETWISE_B_NS_2S",
    "w": 4,
    "h": 8.5,
    "pages": 4,
    "result": "KM2_25x19_SaddleStitched_SHEETWISE_B_NS_2S (4x8.5)"
  }
]
