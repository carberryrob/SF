# Enable logic before blocks section
# Apparently you can't check if a PhoneWord is blank because it's a blank object or something

Phone7Word = PHONEWORD(F4, (ph7_label, ph71, ph72, ph73, ph7_ext_lbl, ph74), '*: *-*-* * *')
Phone8Word = PHONEWORD(F4, (ph8_label, ph81, ph82, ph83, ph8_ext_lbl, ph84), '*: *-*-* * *')
Phone9Word = PHONEWORD(F4, (ph9_label, ph91, ph92, ph93, ph9_ext_lbl, ph94), '*: *-*-* * *')

layout = '3-wide'

if (card3_address1 == '' and card3_address2 == '' and card3_address3 == '' and card3_address4 == '' and card_email3 == ''):
	if (card2_address1 == '' and card2_address2 == '' and card2_address3 == '' and card2_address4 == '' and card_email2 == ''):
		layout = '1-wide'
	else:
		layout = '2-wide'

if layout == '3-wide':
	if center_text == "No":
		PersonBloc = DWIMBLOCK([LEFT, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (0.125*72, (2-0.7492)*72), (LEFT, TOP_BASELINE), (3*72, 0))
	else:
		PersonBloc = DWIMBLOCK([CENTER, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (1.75*72, (2-0.7492)*72), (CENTER, TOP_BASELINE), (3*72, 0))

	Location1 = DWIMBLOCK([LEFT, F4, card_address1, NEWLINE, card_address2, NEWLINE, card_address3, NEWLINE, card_address4, NEWLINE, Phone1Word, NEWLINE, Phone2Word, NEWLINE, Phone3Word, NEWLINE, card_email, NEWLINE], (0.125*72, (2-1.2432)*72), (LEFT, TOP_BASELINE), (1*72, 0), maxlines=(5), maxmsg=('Maximum of 5 lines per location, this includes phone numbers and emails. Please delete some lines to continue.'), uniform_linescale=1)
	
	Location2 = DWIMBLOCK([LEFT, F4, card2_address1, NEWLINE, card2_address2, NEWLINE, card2_address3, NEWLINE, card2_address4, NEWLINE, Phone4Word, NEWLINE, Phone5Word, NEWLINE, Phone6Word, NEWLINE, card_email2, NEWLINE], (1.25*72, (2-1.2432)*72), (LEFT, TOP_BASELINE), (1*72, 0), maxlines=(5), maxmsg=('Maximum of 5 lines per location, this includes phone numbers and emails. Please delete some lines to continue.'), uniform_linescale=1)
	Location3 = DWIMBLOCK([LEFT, F4, card3_address1, NEWLINE, card3_address2, NEWLINE, card3_address3, NEWLINE, card3_address4, NEWLINE, Phone7Word, NEWLINE, Phone8Word, NEWLINE, Phone9Word, NEWLINE, card_email3, NEWLINE], (2.375*72, (2-1.2432)*72), (LEFT, TOP_BASELINE), (1*72, 0), maxlines=(5), maxmsg=('Maximum of 5 lines per location, this includes phone numbers and emails. Please delete some lines to continue.'), uniform_linescale=1)

elif layout == '2-wide':
	if center_text == "No":
		PersonBloc = DWIMBLOCK([LEFT, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (0.25*72, (2-0.7909)*72), (LEFT, TOP_BASELINE), (3*72, 0))
	else:
		PersonBloc = DWIMBLOCK([CENTER, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (1.75*72, (2-0.7909)*72), (CENTER, TOP_BASELINE), (3*72, 0))
	Location1 = DWIMBLOCK([LEFT, F4, card_address1, NEWLINE, card_address2, NEWLINE, card_address3, NEWLINE, card_address4, NEWLINE, Phone1Word, NEWLINE, Phone2Word, NEWLINE, Phone3Word, NEWLINE, card_email, NEWLINE], (0.25*72, (2-1.2709)*72), (LEFT, TOP_BASELINE), (1.375*72, 0), maxlines=(5), maxmsg=('Maximum of 5 lines per location, this includes phone numbers and emails. Please delete some lines to proof this card.'), uniform_linescale=1)
	Location2 = DWIMBLOCK([RIGHT, F4, card2_address1, NEWLINE, card2_address2, NEWLINE, card2_address3, NEWLINE, card2_address4, NEWLINE, Phone4Word, NEWLINE, Phone5Word, NEWLINE, Phone6Word, NEWLINE, card_email2, NEWLINE], (3.25*72, (2-1.2709)*72), (RIGHT, TOP_BASELINE), (1.375*72, 0), maxlines=(5), maxmsg=('Maximum of 5 lines per location, this includes phone numbers and emails. Please delete some lines to continue.'), uniform_linescale=1)

elif layout == '1-wide':
	if center_text == "No":
		PersonBloc = DWIMBLOCK([LEFT, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (0.2071*72, (2-0.8603)*72), (LEFT, TOP_BASELINE), (3*72, 0))
	else:
		PersonBloc = DWIMBLOCK([CENTER, F1, IF(name_prefix, ' '), name_first, ' ', IF(name_middle, ' '), name_last, IF(', ', name_suffix), NEWLINE, F3, card_rank, NEWLINE, card_expertise, NEWLINE], (1.75*72, (2-0.8603)*72), (CENTER, TOP_BASELINE), (3*72, 0))

	Location1 = DWIMBLOCK([LEFT, F4, card_address1, NEWLINE, card_address2, NEWLINE, card_address3, NEWLINE, card_address4, NEWLINE], (0.2071*72, (2-1.3753)*72), (LEFT, TOP_BASELINE), (1.375*72, 0), uniform_linescale=1)
	Location2 = DWIMBLOCK([RIGHT, F4, Phone1Word, NEWLINE, Phone2Word, NEWLINE, Phone3Word, NEWLINE, card_email, NEWLINE], (3.275*72, (2-1.3753)*72), (RIGHT, TOP_BASELINE), (1.375*72, 0), uniform_linescale=1)

if include_mychart == "Yes":
	Location4 = DWIMBLOCK([CENTER, F4, 'https://mychart.hopkinsmedicine.org/MyChart/', NEWLINE], (1.75*72, (2-1.85)*72), (CENTER, TOP_BASELINE))


