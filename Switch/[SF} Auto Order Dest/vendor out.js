
// Rob Carberry 5.8.2025

var template = [
  "APFM2100",
  "APFM2105-NEW",
  "ART_CRC-BC_Spot-Only",
  "ART_CRC-COMMERCIAL_BC_Spot-Only",
  "ATDS-BC-002",
  "CCSAO-ENGRVD-NAMEPLT-001",
  "CCSAO-NAMEPLTwithBKT-001",
  "CCSA-PRM-BadgeEngrave-002",
  "CFG-BC_SPT-RSD-UV",
  "CFG-PAD_POSTIT_4.0",
  "CFG-PKT_FLDR_5x9",
  "CFG-PKT_FLDR_9X12",
  "CLV-BC_ SPT_UV_1S",
  "CRC_BC_COMMERCIAL",
  "CRC_NMBDGE_ORD1",
  "CRC-14FTDBLSIDFLG",
  "CRC-9FTDBLSIDFLG",
  "CRC-BC_2S_OSV_SPUVBK",
  "CRC-BC_CORP_OSV",
  "CRC-MAGNET_12X12",
  "CRC-MAGNET_18x18",
  "CRC-PRT-DH-001",
  "CRC-RETBAN24-001",
  "DD-STCKR_ROLL_PERF",
  "HMCNT-DOOR_HNGR",
  "HMCNT-MAGNETS",
  "HOCO-BC_FRE_RSCUE_THERMO-001",
  "HOCO-BC-COUNCIL_THERMO-001",
  "HOCO-BC_THERMO_CGR_NAT-001",
  "HOCO-BC_THERMO_CLS_LAID-001",
  "HOCO-BC_THERMO_CLS_LINEN-001",
  "MARSTMP-ADDRESS-1",
  "MARSTMP-CONFIDENTIAL-1",
  "MARSTMP-COPY-1",
  "MARSTMP-FLIEN-1",
  "MARSTMP-FLIEN-2",
  "MARSTMP-PAIDINFULL-1",
  "MARSTMP-REFINANCED-1",
  "MARSTMP-SettledLess",
  "MARSTMP-WELLSFARGO-1",
  "NOVA-BC_Spot-Only",
  "NOVA-BC_SPUV_SIDE2",
  "PBCU-REFER-CARD",
  "PROMO1700",
  "PROMO1705",
  "PROMO1710",
  "PROMO1715",
  "PROMO1720",
  "PROMO1725",
  "PROMO1735",
  "PROMO1765",
  "PROMO1800",
  "PROMO1815",
  "Promo1825",
  "Promo1830",
  "PROMO1835_portal",
  "PROMO1860",
  "PROMO1865",
  "PROMO1880",
  "PROMO1915",
  "PROMO1920",
  "PROMO1925",
  "PROMO1930",
  "PROMO1935",
  "PROMO1940",
  "PROMO2005",
  "PROMO2015",
  "Promo2035",
  "PROMO2040",
  "PROMO2065",
  "PROMO2070",
  "PROMO2075",
  "PROMO2080",
  "PROMO2085_portal",
  "Promo2090",
  "Promo2095",
  "Promo2100",
  "Promo2105",
  "Promo2110",
  "Promo2115",
  "Promo2120",
  "Promo2125",
  "PROMO2145",
  "PROMO2150",
  "PROMO2155",
  "PROMO2160",
  "PROMO2165",
  "PROMO2170",
  "PROMO2175",
  "PROMO2180",
  "PROMO2185",
  "PROMO2190",
  "PROMO2195",
  "PROMO2200",
  "PROMO2205",
  "PROMO2210",
  "PROMO2215",
  "PROMO2220",
  "PROMO2225",
  "Promo2235_portal",
  "Promo2240_portal",
  "Promo2245_portal",
  "Promo2255_portal",
  "Promo2265_portal",
  "Promo2270_portal",
  "Promo2275_portal",
  "Promo2300",
  "Promo2315",
  "Promo2325",
  "Promo2330",
  "RMG-BC_SLK_LAM_RC",
  "ROS-FED-BC_THERMO",
  "SCHBAKBC",
  "SGN1548",
  "SGN1670",
  "SGN1671",
  "SGN1672",
  "SGN1673",
  "SGN1717",
  "SGN1718",
  "SGN1734",
  "SGN1735",
  "SGN1740",
  "SGN1741",
  "SGN1742",
  "SVL-SALES_REP_BC_1S",
  "TTG-DOOR_HANGERS",
];

function manualTrim(s) {
    return s.replace(/^\s+/, '').replace(/\s+$/, '');
}

var templatePD = job.getPrivateData("template_number");
templatePD = manualTrim((templatePD + "").toUpperCase());

var matchFound = false;

for (var i = 0; i < template.length; i++) {
    var entry = manualTrim((template[i] + "").toUpperCase());
    if (entry === templatePD) {
        matchFound = true;
        break;
    }
}
matchFound;
