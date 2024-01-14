# Enable logic before blocks section
if (Location == '-None' or Location == ''):
        COND('A Location is required!')
else:
    if (CourtFees_BD[0:1] == "$"):
        CourtFees_BD = CourtFees_BD[1:]
    if (OpenPlay_BD[0:1] == "$"):
        OpenPlay_BD = OpenPlay_BD[1:]
    if (CourtFees_LD[0:1] == "$"):
        CourtFees_LD = CourtFees_LD[1:]
    if (OpenPlay_LD[0:1] == "$"):
        OpenPlay_LD = OpenPlay_LD[1:]
