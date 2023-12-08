# vCard QR Code #
if (include_qr):
	def vcard_line(left, right, joinwith=':'):
	  charset=''
	  if isinstance(right, unicode):
		right = right.encode('UTF8')
		charset=';CHARSET=utf-8'
	  return '%s%s%s%s\n' % (left, charset, joinwith, right)
	vcard = 'BEGIN:VCARD\n'
	vcard += 'VERSION:4.0\n'
	vcard += vcard_line('N', name_last+';'+name_first)
	vcard += vcard_line('FN', name_first+' '+name_last)
	vcard += vcard_line('TITLE', card_title1)
	vcard += vcard_line('ORG', 'Active Minerals International, LLC')
	if len(ph1_label) > 0:
		if(ph1_label == 'Direct'):
			vcard += vcard_line('TEL;Phone', ph11 +ph12 +ph13)
		elif(ph1_label == 'Cell'):
			vcard += vcard_line('TEL;Mobile', ph11 +ph12 +ph13)
		elif(ph1_label == 'Fax'):
			vcard += vcard_line('TEL;Fax', ph11 +ph12 +ph13)
	if len(ph2_label) > 0:
		if(ph2_label == 'Direct'):
			vcard += vcard_line('TEL;Phone', ph21 +ph22 +ph23)
		elif(ph2_label == 'Cell'):
			vcard += vcard_line('TEL;Mobile', ph21 +ph22 +ph23)
		elif(ph2_label == 'Fax'):
			vcard += vcard_line('TEL;Fax', ph21 +ph22 +ph23)
	#intl#vcard += vcard_line('TEL;WORK;Phone', ph1)
	#intl#vcard += vcard_line('TEL;FAX', ph2)
	#intl#vcard += vcard_line('TEL;Cell', ph3)
	vcard += vcard_line('EMAIL;WORK;INTERNET', card_email)
	card_street = card_street1
	if card_street2:
	  card_street = card_street1+' '+card_street2
	adr = card_street + ';' + card_city + ';' + card_state + ';' + card_zip
	vcard += vcard_line('ADR;WORK;;', adr)
	if card_www:
		# NB not in form
		vcard += vcard_line('URL', card_www)
	vcard += vcard_line('socialProfile;linkedin', 'https://www.linkedin.com/company/active-minerals-international')
	vcard += vcard_line('socialProfile;facebook', 'https://www.facebook.com/ActiveMinerals')
	vcard += vcard_line('socialProfile;twitter', 'https://www.twitter.com/activeminerals')
	vcard += vcard_line('socialProfile;youtube', 'https://www.youtube.com/channel/UCrSS84T5_CQAHsvTSekyDXQ')
	
	vcard += 'END:VCARD'
	QRBlock = DWIMBLOCK([CENTER, QRCODE(vcard, 60, color=C1, backgroundcolor=C3)], (2.93*72, 1.5*72), (CENTER, MIDDLE))


# CENTER, QRCODE(vcard, 60, color=C2, backgroundcolor=C3)
