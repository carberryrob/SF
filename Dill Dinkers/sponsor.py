# Enable logic before blocks section
if sr_Upload:
    sponsor_name = None
    sponsor = None
else:
    # CENTER, F2, sponsor_name, NEWLINE
    if (sponsor != ''):
        C1Line = LINES(sponsor, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
        Cust1Block = DWIMBLOCK([CENTER, F2, C1Line], (12*72, 7.447869*72), (CENTER, MIDDLE), (22*72, 10*72), uniform_linescale=1, layer=0)
