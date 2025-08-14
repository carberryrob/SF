function manualTrim(s) {
    return s.replace(/^\s+/, '').replace(/\s+$/, '');
}
var lastname = "";
var PageDNA_Name = (job.getPrivateData("PageDNA_Name") || "");
PageDNA_Name = manualTrim((PageDNA_Name + "").toUpperCase());
var parts = PageDNA_Name.split("-");
if (parts.length >= 3) {
     lastname = manualTrim((parts[2] + "").toUpperCase());
}
lastname;