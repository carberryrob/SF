var page_count = Number(job.getPrivateData("page_count") || 0);
var height = Number(job.getPrivateData("height") || 0);
var width = Number(job.getPrivateData("width") || 0);
var horizontal = false;

if (Math.min(height, width) == 144 && Math.max(height, width) == 252) {
    horizontal = false;  //exclude business cards
} else if (page_count == 2 && width > height) {
    horizontal = true;
}

horizontal;
