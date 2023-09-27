# This style includes Output layers that are not the same as the preview layers.

AddressBlock = ANGLE(DWIMBLOCK([LEFT, F1, card_street1, NEWLINE,
IFSET(card_street2, VSPACER(4.0)), card_street2, NEWLINE,
VSPACER(4.0), card_city, ', ', card_state, ' ', card_zip, NEWLINE,
VSPACER(4.0), F2, 'www.CFG.bank', NEWLINE], (5.4*72, 4.9*72), (LEFT, BOTTOM), layer=-2000), 17.5, (CENTER, MIDDLE))


#__pagesize__ = (684,297)
#__pagesize__ = (1224,792)

# 113137


697
725
781
1072
1489
