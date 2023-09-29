LEFT, F1, name_first, IF(' ', name_last), IF(WRAPHERE(' '), credentials), NEWLINE,
F2, WRAP, card_title1, NOWRAP, NEWLINE,
VSPACER(11.85), F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(Phone3Word, JOIN3('F  ', COL, Phone3Word)), NEWLINE,
F3, card_email, NEWLINE,
card_www, NEWLINE



# Enable logic before blocks section

AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(Phone3Word, JOIN3('F  ', COL, Phone3Word)), NEWLINE,
F3, WRAPON(card_email, '@', wrap_before =1), NEWLINE,
card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.7*72,1.75*72), layer=0)


# Reduce font until address blocks fits.
while (AddressBlock.width > (1.5*72)):
    F3.pointsize = F3.pointsize - 0.025
    F4.size1 = F4.size1 - 0.025
    F4.size2 = F4.size2 - 0.025

    AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
    card_street2, NEWLINE,
    card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
    F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
    IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
    IFSET(Phone3Word, JOIN3('F  ', COL, Phone3Word)), NEWLINE,
    F3, WRAPON(card_email, '@', wrap_before =1), NEWLINE,
    card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.7*72,1.75*72), layer=0)

# Write the complete text box
AddressBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), IF(WRAPHERE(' '), credentials), NEWLINE,
F2, WRAP, card_title1, NOWRAP, NEWLINE,
VSPACER(11.85), F3, card_street1, NEWLINE,
card_street2, NEWLINE,
card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F4, IFSET(Phone1Word, JOIN3('T  ', COL, Phone1Word)), NEWLINE,
IFSET(Phone2Word, JOIN3('M  ', COL, Phone2Word)), NEWLINE,
IFSET(Phone3Word, JOIN3('F  ', COL, Phone3Word)), NEWLINE,
F3, WRAPON(card_email, '@', wrap_before =1), NEWLINE,
card_www, NEWLINE], (1.85*72, 1*72), (LEFT, MIDDLE), (1.5*72,1.75*72), layer=0)

yBlock = DWIMBLOCK([RIGHT, F3, str(F3.pointsize) + " | " + str(F4.size1) + " | " + str(F4.size2), NEWLINE], (3.5*72, 0), (RIGHT, BOTTOM), layer=1)
