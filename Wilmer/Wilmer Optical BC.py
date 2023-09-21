# Enable logic before blocks section

AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
card_street2, NEWLINE,
CHAIN(card_city, ', ', card_state, ' ', card_zip), NEWLINE], (0.2*72, 0.2*72), (LEFT, BOTTOM), layer=1)

rightBlock = DWIMBLOCK([RIGHT, F3, Phone1Word, NEWLINE,
card_email, NEWLINE,
'wilmeroptical.com', NEWLINE], (3.3*72, 0.2*72), (RIGHT, BOTTOM), layer=1)

# xBlock = DWIMBLOCK([LEFT, F3, str(AddressBlock._get_right()) + " | " + str(rightBlock._get_left()), NEWLINE], (0, 0), (LEFT, BOTTOM), layer=1)

# Reduce font until both address blocks fit with a 5pt gap in between.
while (AddressBlock._get_right() > (rightBlock._get_left()-5)):
    F3.pointsize = F3.pointsize - 0.1

    AddressBlock = DWIMBLOCK([LEFT, F3, card_street1, NEWLINE,
    card_street2, NEWLINE,
    CHAIN(card_city, ', ', card_state, ' ', card_zip), NEWLINE], (0.2*72, 0.2*72), (LEFT, BOTTOM), layer=1)

    rightBlock = DWIMBLOCK([RIGHT, F3, Phone1Word, NEWLINE,
    card_email, NEWLINE,
    'wilmeroptical.com', NEWLINE], (3.3*72, 0.2*72), (RIGHT, BOTTOM), layer=1)

# yBlock = DWIMBLOCK([RIGHT, F3, str(AddressBlock._get_right()) + " | " + str(rightBlock._get_left()), NEWLINE], (3.5*72, 0), (RIGHT, BOTTOM), layer=1)
