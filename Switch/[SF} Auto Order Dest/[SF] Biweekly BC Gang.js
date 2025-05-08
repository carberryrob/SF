
// Rob Carberry 5.8.2025

var template = [
  "100lb generic KM1  BC",
  "100lb generic KM1 BC",
  "100lb_Gen_KM1_1s",
  "100lb_Gen_KM1_1S",
  "100lb_Gen_KM1_2s",
  "100lb_Gen_KM1_2S",
  "ABS-BUS_CRD_2S",
  "ABTF-BC-001",
  "ALLI_BC_1S",
  "ALLI_BC_2S",
  "APFM_BC_ALL_For_Kit",
  "APFM_BC_ALL",
  "AVEM-BC-001",
  "BCMAR1000",
  "BCMAR500",
  "CB-BC-001",
  "CB-BC-001",
  "CEI-BUS_CRD_1S",
  "CEI-BUS_CRD_2S",
  "CELA_BC_01",
  "CHPLVAL-BC_001",
  "LIV-LEG_BC_2S",
  "MECU-BC_2S",
  "MWPH-BC_1S",
  "MWPH-BC_2S",
  "PBCU-GET_CNNCTD_CRD",
  "POMP-BC-001",
  "PSI-BCIMP-001",
  "SDGFP-BC_2S",
  "STVNSN_BC_1S",
  "STVNSN_BC_2S",
  "TECH-USA_BC_NO_SEAL",
  "TRANSBC_001",
  "UBALT-BC_4C_1S",
  "UBALT-BC_4C_2S",
  "UMB-BUS_CRD_1S",
  "UMB-BUS_CRD_2S",
  "UMBC BC 001",
  "WITT-BC-Multi-001",
  "WITT-BC-Multi2S-001",
  "WITT-BC-Single-001",
  "WITT-BC-Single2S-001",
];

function manualTrim(s) {
  return s.replace(/^\s+/, '').replace(/\s+$/, '');
}

var templatePD = job.getPrivateData("template_number");
templatePD = manualTrim((templatePD + "").toUpperCase());

var template_found = false;

for (var i = 0; i < template.length; i++) {
  var entry = manualTrim((template[i] + "").toUpperCase());
  if (entry === templatePD) {
    template_found = true;
    break; // optimization: stop when match is found
  }
}

template_found;
