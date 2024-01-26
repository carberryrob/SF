# Enable logic before blocks section

###count the number of addresses chosen.
cnt = 0
addused = []
for address in (card_address, card2_address, card3_address, card4_address, card5_address, card6_address):
	if address != '-None':
		if address not in addused:
			cnt += 1
			addused.append(address)
		else:
			COND('The address for ' + address.upper() + ' is already selected. Only unique addresses can be added to the envelope.')
address = None

if cnt == 1:
	lft = 1*72
	add1 = None
	add2 = None
	add3 = None
	add4 = None
	add5 = None
	add6 = None
	if card_address != '-None':
		add1 = DWIMLINES([CENTER, F1, card_street1, NEWLINE,
		card_street2, NEWLINE,
		JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE])
	if card2_address != '-None':
		add2 = DWIMLINES([CENTER, F1, card2_street1, NEWLINE,
		card2_street2, NEWLINE,
		JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), NEWLINE])
	if card3_address != '-None':
		add3 = DWIMLINES([CENTER, F1, card3_street1, NEWLINE,
		card3_street2, NEWLINE,
		JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), NEWLINE])
	if card4_address != '-None':
		add4 = DWIMLINES([CENTER, F1, card4_street1, NEWLINE,
		card4_street2, NEWLINE,
		JOIN3(card4_city, ', ', JOIN3(card4_state, ' ', card4_zip)), NEWLINE])
	if card5_address != '-None':
		add5 = DWIMLINES([CENTER, F1, card5_street1, NEWLINE,
		card5_street2, NEWLINE,
		JOIN3(card5_city, ', ', JOIN3(card5_state, ' ', card5_zip)), NEWLINE])
	if card6_address != '-None':
		add6 = DWIMLINES([CENTER, F1, card6_street1, NEWLINE,
		card6_street2, NEWLINE,
		JOIN3(card6_city, ', ', JOIN3(card6_state, ' ', card6_zip)), NEWLINE])
	Block1a = DWIMBLOCK([add1, add2, add3, add4, add5, add6], (lft, 3.15*72), (CENTER, TOP), (1.65*72, 0), uniform_linescale=1, layer=0)


