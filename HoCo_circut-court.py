F1 = F2 = F3 = F4 = F5 = F6 = FONT('Times-Roman', 12, 1.2, 0)

C1 = CUSTOMCOLOR('Not Reflex Blue', 1.000, 0.823, 0.366, 0.302, 1)
C2 = CUSTOMCOLOR('Reflex Blue', 1.000, 0.73, 0, 0.02, 1)

if (font_face == 'CaseflowManagement'):
    font_face = 'BernhardFashionBT-Regular'
    F1 = F2 = F3 = F4 = F5 = F6 = FONT(font_face, 14.5, 4.93, 0)

elif (font_face == 'OfficeSheriff'):
    F1 = FONT('AGaramondPro-Bold', 15, 0.3, 0)
    F2 = FONT('GaramondPremrPro-It', 11, 2.2, 0)
    F3 = FONT('AGaramondPro-Regular', 10, 3.82, 0)
    F4 = F5 = F6 = FONT('AGaramondPro-Regular', 10, 0, 0)

elif (font_face == 'WorkforceDevelopment'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('ArialMT', 10, 2, 0)

elif (font_face == 'MagistratesOffice'):
    F1 = SCFONT('Arial-BoldMT', 8.75, 1.75, 0)
    F2 = FONT('Arial-BoldMT', 8, 1.6, 0)
    F3 = F4 = F5 = F6 = FONT('Arial-BoldMT', 7, 1.4, 0)

elif (font_face == 'StateCourt'):
    font_face = 'BernhardModernStd-Bold'
    F1 = F2 = F3 = F4 = F5 = F6 = SCFONT(font_face, 10, 6, 0, algorithm=0.7)

elif (font_face == 'DivisionBilling'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('BookmanITCbyBT-Light', 11, 1.98, 0)

elif (font_face == 'GuilfordRoad'):
    F1 = FONT('Bookman-Demi', 10.5, 0.84, 0)
    F2 = F3 = F4 = F5 = F6 = FONT('Bookman-LightItalic', 8, 1.6, 0)

elif (font_face == 'EmergencyManagement'):
    F1 = F2 = F3 = F4 = F5 = F6 = CIDFONT('Constantia-Bold', 11.04, 1.22, 0)

elif (font_face == 'CircuitCourt' ):
    font_face = 'EngraversRomanBT-Bold'
    F1 = FONT(font_face, 10, 1.2, 0.2)
    F2 = FONT(font_face, 12, 1.8, 0.24)
    F3 = FONT(font_face, 11, 1.65, 0.22)
    F4 = F5 = F6 = FONT(font_face, 10, 1.5, 0.2)

elif (font_face == 'LicenseCommissioners' or font_face == 'CountyCouncil'):
    F1 = FONT('Garamond-KursivHalbfett', 12, 1.32, 0)
    F2 = F3 = F4 = F5 = F6 = FONT('Garamond-KursivHalbfett', 10, 2, 0)

elif (font_face == 'SheriffDistrict'):
    F1 = FONT('Helvetica-Bold', 10, 2, 0)
    F2 = FONT('Helvetica', 8.5, 3.43, 0)
    F3 = F4 = F5 = F6 = FONT('Helvetica', 8.5, 1.53, 0)

elif (font_face == 'DepartmentFinance'):
    F1 = FONT('HelveticaNeueLTStd-Bd', 10, 4.8, 0)
    F2 = F3 = F4 = F5 = F6 = FONT('HelveticaNeueLTStd-Roman', 10, 4.8, 0)

elif (font_face == 'OfficeAging'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('MinionPro-Regular', 12, 0.36, 0)

elif (font_face == 'HumanRights'):
    F1 = FONT('Palatino', 14, -0.56, 0)
    F2 = SCFONT('Palatino', 14, -0.56, 0, algorithm=0.714)
    F3 = FONT('Palatino', 11, 6.87, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'HumanResources' or font_face == 'BainCenter'):
    font_face = 'Palatino'
    F1 = F2 = SCFONT(font_face, 14.41, 0, 0, algorithm=0.714)
    F3 = FONT(font_face, 11.32, 7.594, 0)
    F4 = F5 = F6 = FONT(font_face, 11.32, 2.264, 0)

elif (font_face == 'FireRescue'):
    font_face = 'Palatino'
    F1 = F2 = SCFONT(font_face, 14, 0, 0, algorithm=0.714)
    F3 = FONT(font_face, 11, 7.37, 0)
    F4 = F5 = F6 = FONT(font_face, 11, 2.2, 0)

elif (font_face == 'FireMarshal' or font_face == 'PlanningZoning' or font_face == 'ConstructionInspection' or font_face == 'Utilities8250' or font_face == 'Utilities8270' or font_face == 'PurchasingAdministration'):
    F1 = F2 = SCFONT('Palatino', 14, 0, 0, algorithm=0.714)
    F3 = FONT('Palatino', 11, 7.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'FinanceLeft'):
    font_face = 'Palatino'
    F1 = F2 = F3 = F4 = F5 = F6 = FONT(font_face, 11, 2.2, 0)

elif (font_face == 'BureauFacilities' or font_face == 'PublicWorks'):
    font_face = 'Palatino'
    F1 = F2 = F3 = SCFONT(font_face, 14, 0, 0, algorithm=0.714)
    F4 = FONT(font_face, 11, 7.594, 0)
    F5 = F6 = FONT(font_face, 11, 2.264, 0)

elif (font_face == 'RecreationParks'):
    F1 = F2 = SCFONT('Palatino', 15, 0, 0, algorithm=0.7)
    F3 = FONT('Palatino', 11, 7.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'RiverwoodDrive'):
    F1 = F2 = SCFONT('Palatino', 15, 0, 0, algorithm=0.7)
    F3 = FONT('Palatino', 11, 5.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'GaryArthur'):
    F1 = F2 = SCFONT('Palatino', 15, 0, 0, algorithm=0.7)
    F3 = FONT('Palatino', 11, 7.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 1, 0)

elif (font_face == 'RiskManagement'):
    F1 = F2 = SCFONT('Palatino', 15, 0, 0, algorithm=0.7)
    F3 = FONT('Palatino', 11, 7.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2, 0)

elif (font_face == 'BendixRoad' or font_face == 'CourtHouseDrive'):
    F1 = F2 = SCFONT('Palatino', 15, 0, 0, algorithm=0.7)
    F3 = FONT('Palatino', 11, 7.38, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'CountyExecutive'):
    F1 = SCFONT('Palatino', 14, 2.8, 0, algorithm=0.714)
    F2 = FONT('Palatino', 14, 0, 0)
    F3 = FONT('Palatino', 11, 3.2, 0)
    F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'CancerPrevention'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('Palatino', 11, 2.2, 0)

elif (font_face == 'DistrictCourt'):
    font_face = 'Times-Bold'
    F1 = FONT(font_face, 8, 1.6, 0)
    F2 = FONT(font_face, 12, 2.3, 0)
    F3 = FONT(font_face, 8, 1.04, 0)
    F4 = F5 = F6 = FONT(font_face, 8, 1.04, 0)

elif (font_face == 'FamilyCourt'):
    font_face = 'Times-Roman'
    F1 = F2 = F3 = F4 = F5 = F6 = FONT(font_face, 12, 2.4, 0)

elif (font_face == 'JurySummons'):
    font_face = 'TimesNewRomanPSMT'
    F1 = F2 = F3 = F4 = F5 = F6 = FONT(font_face, 12, 2.4, 0)

elif (font_face == 'TaxpayerService'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('TimesNewRomanPS-BoldMT', 13, 1, 0)

elif (font_face == 'PropertyTax'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('TimesNewRomanPS-BoldMT', 13, 2.99, 0)

elif (font_face == 'StatesAttorneys'):
    font_face = 'TimesNewRomanPS-BoldMT'
    F1 = FONT(font_face, 8, 1.6, 0)
    F2 = FONT(font_face, 12, 3.26, 0)
    F3 = FONT(font_face, 8, 1.78, 0)
    F4 = F5 = F6 = FONT(font_face, 8, 1.04, 0)

elif (font_face == 'DepartmentHousing'):
    F1 = F2 = F3 = F4 = F5 = F6 = FONT('TimesNewRomanPS-ItalicMT', 9, 1.8, 0)


LogoBlock = DWIMBLOCK([EPSWORD('./con/' + logo_select1, xscale=1, yscale=1)], (27.36, 273.6), (LEFT, TOP), layer=-1)

if (LogoBlock._get_right() > 105):
    xcorner = LogoBlock._get_left() + float(logo_select1_xoffset)
    ycorner = LogoBlock._get_bottom() + float(logo_select1_yoffset)
elif (LogoBlock._get_right() > 28):
    xcorner = LogoBlock._get_right() + float(logo_select1_xoffset)
    ycorner = LogoBlock._get_top() + float(logo_select1_yoffset)
else:
    xcorner = LogoBlock._get_right()
    ycorner = LogoBlock._get_top()

if (logo_select1 == 'logo_hocomd.pdf' and font_align == 'LEFT'):
    AddressBlock = DWIMBLOCK([LEFT, F1, card_line1, NEWLINE, F2, card_line2, NEWLINE, F3, card_line3, NEWLINE, F4, card_line4, NEWLINE, F5, card_line5, NEWLINE, F6, card_line6, NEWLINE], ((LogoBlock._get_right() + LogoBlock._get_left()) / 2, LogoBlock._get_bottom() + float(logo_select1_yoffset)), (CENTER, TOP))
elif (logo_select1 == 'logo_hocomd.pdf'):
    AddressBlock = DWIMBLOCK([CENTER, F1, card_line1, NEWLINE, F2, card_line2, NEWLINE, F3, card_line3, NEWLINE, F4, card_line4, NEWLINE, F5, card_line5, NEWLINE, F6, card_line6, NEWLINE], ((LogoBlock._get_right() + LogoBlock._get_left()) / 2, LogoBlock._get_bottom() + float(logo_select1_yoffset)), (CENTER, TOP))
elif (font_align == 'LEFT'):
    AddressBlock = DWIMBLOCK([LEFT, F1, card_line1, NEWLINE, F2, card_line2, NEWLINE, F3, card_line3, NEWLINE, F4, card_line4, NEWLINE, F5, card_line5, NEWLINE, F6, card_line6, NEWLINE], (xcorner, ycorner), (LEFT, TOP))
else:
    AddressBlock = DWIMBLOCK([CENTER, F1, card_line1, NEWLINE, F2, card_line2, NEWLINE, F3, card_line3, NEWLINE, F4, card_line4, NEWLINE, F5, card_line5, NEWLINE, F6, card_line6, NEWLINE], (xcorner, ycorner), (LEFT, TOP))

if 'summons' in text_extra:
    F7 = FONT('TimesNewRomanPSMT', 20, 10, 0)
    SummonsBlock = DWIMBLOCK([CENTER, F7, 'OPEN AT ONCE', NEWLINE, 'JURY SUMMONS ENCLOSED', NEWLINE], (402.22, 115.88), (LEFT, BOTTOM))

if 'return' in text_extra:
    F8 = FONT('TimesNewRomanPS-BoldMT', 10, 1.2, 0)
    ReturnBlock = DWIMBLOCK([LEFT, F8, 'RETURN SERVICE REQUESTED', NEWLINE], (xcorner, AddressBlock._get_bottom() - 22.56), (LEFT, TOP))


