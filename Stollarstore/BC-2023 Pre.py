# Enable logic before blocks section
T1 = 0.49 * 72
T2 = 0.34 * 72
T3 = 0.17 * 72

if Phone1Word:
    phoneBlock = DWIMBLOCK([EPSWORD('con/phone.eps', xscale=1, yscale=1), LEFT, F1, SPACER(8), F6, Phone1Word, NEWLINE], (0.1875 * 72, T1), (LEFT, TOP_BASELINE), layer=0)
else:
    T3 = T2
    T2 = T1
if card_email:
    emailBlock = DWIMBLOCK([EPSWORD('con/email.pdf', xscale=1, yscale=1), LEFT, F1, SPACER(7), F5, card_email, NEWLINE], (0.1875 * 72, T2), (LEFT, TOP_BASELINE), layer=0)
else:
    T3 = T2
    T2 = T1
if card_street1 or card_street2 or card_city or card_state or card_zip:
    addressBlock = DWIMBLOCK([EPSWORD('con/address.pdf', xscale=1, yscale=1), LEFT, F1, SPACER(7), F5, card_street1, IF(', ', card_street2), IF(', ', card_city), IF(', ', card_state), IF(' ', card_zip), NEWLINE], (0.1875 * 72, T3), (LEFT, TOP_BASELINE), layer=0)



bc_sf_2023-For_Kit
bc_sf_2023-SpotUV-For_Kit



LEFT, F7, name_first, IF(' ', name_last), NEWLINE