# Enable logic before blocks section

if (logo == ''):

	F2 = F1.clone()
	F2.pointsize = F1.pointsize
	##F1.scalemethod = 'hscale'
	##F2.scalemethod = 'hscale'

	if (card_title1 != '' and card_title2 != ''):
		C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
		C2Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
		Cust1Block = DWIMBLOCK([CENTER, F1, C1Line], (4.5*72, 11.5*72), (CENTER, TOP), (7*72, 0), layer=0)
		LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.5*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, MIDDLE), layer=0)
		Cust2Block = DWIMBLOCK([CENTER, F1, C2Line], (4.5*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 0), layer=0)

		# calculate the smallest scale factor applied to any line.
		#s = " | "  #Not Used
		#ms = ""  #Not Used
		minscale = 1
		#BC = 0  #Not Used
		
		for block in (Cust1Block, Cust2Block):
			for line in block.lines:
				#BC = BC + 1  #Not Used
				scale = line.get_scale_amount()
				#s = s + str(scale) + " - "  #Not Used
				if scale:
					minscale = min(minscale, scale)
					#ms = minscale  #Not Used
		block = None
		#s = s + "FinalFontSize = " + str(F1.pointsize * minscale) + " ; minscale = " + str(ms)  #Not Used
		#Block5 = DWIMBLOCK([F1, LINEWRAP, str(BC), str(s)], (0, 0), (LEFT, BOTTOM), (7*72, 2*72), layer=0, uniform_linescale=1)  #Not Used
		
		# Set new font Size
		F2 = F1.clone()
		F2.pointsize = F1.pointsize * minscale
		
		##F2.scalemethod = 'hscale'
		
		C1Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
		C2Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
		
		Cust1Block = DWIMBLOCK([C1Line], (4.5*72, 11.5*72), (CENTER, TOP), (7*72, 0), layer=0)
		LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.5*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=0)
		Cust2Block = DWIMBLOCK([C2Line], (4.5*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 0), layer=0)
		
		#s = "C1 get_top = " + str(Cust1Block._get_top())
		#s = s + " | C1 get_bottom = " + str(Cust1Block._get_bottom())
		#s = s + " | C2 get_top = " + str(Cust2Block._get_top())
		#s = s + " | C2 get_bottom = " + str(Cust2Block._get_bottom())
		#s = s + " | Line get_top = " + str(LineBlock._get_top())
		#s = s + " | Line get_bottom = " + str(LineBlock._get_bottom())
		
		
		length = Cust1Block._get_top() - Cust2Block._get_bottom()
		halflen = length/2
		anchor = (404+(3.91/2)) + halflen
		
		#s = s + " | anchor = " + str(anchor)
		#Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 2*72), layer=0, uniform_linescale=1)  #Not Used
		
		Cust1Block = DWIMBLOCK([C1Line], (4.5*72, anchor), (CENTER, TOP), (7*72, 0), layer=0)
		LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.5*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=0)
		Cust2Block = DWIMBLOCK([C2Line], (4.5*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 0), layer=0)
	elif (card_title1 != ''):
		C1Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
		Cust1Block = DWIMBLOCK([C1Line], (4.5*72, 5.875*72), (CENTER, MIDDLE), (7*72, 0), uniform_linescale=1, layer=0)
	elif (card_title2 != ''):
		C2Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
		Cust2Block = DWIMBLOCK([C2Line], (4.5*72, 5.875*72), (CENTER, MIDDLE), (7*72, 0), uniform_linescale=1, layer=0)


