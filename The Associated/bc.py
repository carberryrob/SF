# Enable logic before blocks section

card_street1 = '5700 Park Heights Avenue'
card_street2 = ''
card_city = 'Baltimore'
card_state = 'Maryland'
card_zip = '21215-3930'
email_label = 'e  '

p1 = len(ph1.strip())
p2 = len(ph2.strip())
# p3 = len(ph3.strip())

BottomBlock = DWIMBLOCK([LEFT, F6, card_street1, IF(', ', card_street2), NEWLINE,
F4, card_city, ', ', card_state, ' ', card_zip, NEWLINE,
VSPACER(5.2), IF(F1, ph1_label, COL, F6, Phone1Word, '   '), IF(F1, ph2_label, '  ', F6, Phone2Word), NEWLINE,
IF(F1, email_label, COL, F6, card_email), NEWLINE], (1.423612*72, 1*72), (LEFT, TOP), (133.2,0), uniform_linescale=1)


