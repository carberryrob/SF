# Enable logic before blocks section

card_www = 'cc-md.org'
name_first = name_first.strip()
name_last = name_last.strip()
card_title1 = card_title1.strip()
credentials = credentials.strip()
card_street1 = logo1_card_street1.strip()
card_street2 = logo1_card_street2.strip()
card_city = logo1_card_city.strip()
card_state = logo1_card_state.strip()
card_zip = logo1_card_zip.strip()
card_email = card_email.strip()
ph3 = logo1_ph3.strip()

VS = 11.85

AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(ph3, JOIN3('F  ', COL, ph3)), NEWLINE,
F3, CASE('lower'), WRAPON(card_email, '@', wrap_before =1), CASE('None'), NEWLINE,
card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.7*72,1.95*72), layer=0)


# Reduce font until address blocks fits.
while (AddressBlock.width > (1.5*72)):
    VS -= 0.01
    F1.pointsize = F1.pointsize - 0.005
    F3.pointsize = F3.pointsize - 0.025
    F4.size1 = F4.size1 - 0.025
    F4.size2 = F4.size2 - 0.025

    AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
    card_street2, NEWLINE,
    card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
    F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
    IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
    IFSET(ph3, JOIN3('F  ', COL, ph3)), NEWLINE,
    F3, CASE('lower'), WRAPON(card_email, '@', wrap_before =1), CASE('None'), NEWLINE,
    card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.7*72,1.95*72), layer=0)

# Write the complete text box
AddressBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), F5, IF(WRAPHERE(', '), credentials), NEWLINE,
F2, WRAP, CASE('upper'), card_title1, CASE('None'), NOWRAP, NEWLINE,
VSPACER(VS), F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(ph3, JOIN3('F  ', COL, ph3)), NEWLINE,
F3, CASE('lower'), WRAPON(card_email, '@', wrap_before =1), CASE('None'), NEWLINE,
card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.5*72,1.95*72), layer=0)

while (AddressBlock.height > (1.75*72)):
    VS -= 0.05
    F1.pointsize = F1.pointsize - 0.005
    F3.pointsize = F3.pointsize - 0.015
    F4.size1 = F4.size1 - 0.015
    F4.size2 = F4.size2 - 0.015

    AddressBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), F5, IF(WRAPHERE(', '), credentials), NEWLINE,
    F2, WRAP, CASE('upper'), card_title1, CASE('None'), NOWRAP, NEWLINE,
    VSPACER(VS), F3, card_street1, NEWLINE,
    card_street2, NEWLINE,
    card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
    F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
    IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
    IFSET(ph3, JOIN3('F  ', COL, ph3)), NEWLINE,
    F3, CASE('lower'), WRAPON(card_email, '@', wrap_before =1), CASE('None'), NEWLINE,
    card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.5*72,1.95*72), layer=0)

NameBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), F5, IF(WRAPHERE(', '), credentials), NEWLINE], (1.85*72, 2*72), (LEFT, TOP), (1.5*72,1.75*72), uniform_linescale=1, layer=0)

AddressBlock = DWIMBLOCK([LEFT, F2, WRAP, CASE('upper'), card_title1, CASE('None'), NOWRAP, NEWLINE,
VSPACER(VS), F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(ph3, JOIN3('F  ', COL, ph3)), NEWLINE,
F3, CASE('lower'), WRAPON(card_email, '@', wrap_before =1), CASE('None'), NEWLINE,
card_www, NEWLINE], (1.85*72, NameBlock._get_bottom()-4.0), (LEFT, TOP), (1.5*72,1.75*72), layer=0)

mb = -((146 - (NameBlock.height + AddressBlock.height)) / 2)
AddressBlock.move(0,mb)
NameBlock.move(0,mb)

# aBlock = DWIMBLOCK([RIGHT, F3, str(NameBlock._get_top()) + " | " + str(NameBlock._get_bottom()) + " | " + str(NameBlock._get_bottom()-VS) + " | " + str(AddressBlock._get_top()) + " | " + str(VS), NEWLINE], (3.5*72, 0), (RIGHT, BOTTOM), layer=0)

# bBlock = DWIMBLOCK([RIGHT, F3, str(mb) + " | " + str(F1.pointsize) + " | " + str(F3.pointsize) + " | " + str(F4.size1) + " | " + str(F4.size2) + " | " + str(VS), NEWLINE], (3.5*72, 9), (RIGHT, BOTTOM), layer=0)


