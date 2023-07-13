# Created 7/7/2023 Rob Carberry

###count the number of addresses chosen.
cnt = 0
addused = []
for address in (card_address, card2_address, card3_address, card4_address, card5_address, card6_address):
	if address != '-None':
		if address not in addused:
			cnt += 1
			addused.append(address)
		else:
			COND('The address for ' + address.upper() + ' is already selected.  Only unique addresses can be added to the envelope.')
address = None


###if only one address is chosen then print on the front and leave the back blank.
if cnt == 1:
	COND(COND_EMPTY)
elif cnt >= 2:
    add1 = None
    add2 = None
    add3 = None
    add4 = None
    add5 = None
    add6 = None
    x = -1
    maxW = 1.35*72
    allW = 0

    BT = -9.2
    ###check box adjustment so it aligns with the address top.
    top = (3.75*72)
    ###place the top of the addresses 3.75in from the bottom.
    Bspc = 4
    ###space between the check box and address block, 6 points.
    Aspc = 20
    ###space between addresses, 0.25in or 18points.
    NL = (9.5*72)
    ###width of a #10 Env, used to center the combined addresses length.
    ###used to create a python list of addresses
    addresses = []
    bloks = []
    bxs = []

    box = DWIMLINES([LEFT, F2, BORDER(WORD('q',F2),0.5,C1,1), NEWLINE]) 
    ###this is how I create the check box. (draw a border around a font that is white)

    ###independent of which address drop-downs are selected, create each address text.
    if card_address != '-None':
        add1 = DWIMLINES([LEFT, F3, card_street1, NEWLINE,
        card_street2, NEWLINE,
        JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE])
        addresses.append(add1)
    if card2_address != '-None':
        add2 = DWIMLINES([LEFT, F3, card2_street1, NEWLINE,
        card2_street2, NEWLINE,
        JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), NEWLINE])
        addresses.append(add2)
    if card3_address != '-None':
        add3 = DWIMLINES([LEFT, F3, card3_street1, NEWLINE,
        card3_street2, NEWLINE,
        JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), NEWLINE])
        addresses.append(add3)
    if card4_address != '-None':
        add4 = DWIMLINES([LEFT, F3, card4_street1, NEWLINE,
        card4_street2, NEWLINE,
        JOIN3(card4_city, ', ', JOIN3(card4_state, ' ', card4_zip)), NEWLINE])
        addresses.append(add4)
    if card5_address != '-None':
        add5 = DWIMLINES([LEFT, F3, card5_street1, NEWLINE,
        card5_street2, NEWLINE,
        JOIN3(card5_city, ', ', JOIN3(card5_state, ' ', card5_zip)), NEWLINE])
        addresses.append(add5)
    if card6_address != '-None':
        add6 = DWIMLINES([LEFT, F3, card6_street1, NEWLINE,
        card6_street2, NEWLINE,
        JOIN3(card6_city, ', ', JOIN3(card6_state, ' ', card6_zip)), NEWLINE])
        addresses.append(add6)

    ########################################################################################
    ### Based on the number of addresses selected, create each address block from the
    ### python addresses list (addresses[i]).
    ### Place all the addresses at 0 left so each block width can be calculated and used
    ### for the placement so all combined are evenly spaced and centered.
    ### After calculated, the addresses will be moved to the precise placement for print.
    ########################################################################################
    maxlines=0
    for adds in addresses:
        lines = len(adds)
        if lines:
            maxlines = max(maxlines, lines)

    for adds in addresses:
        x += 1
        Blocka = "Blocka" + str(x)
        Blocka_value = DWIMBLOCK([adds], (0, top), (LEFT, TOP_BASELINE), (maxW, 0), uniform_linescale=1, layer=0)
        globals()[Blocka] = Blocka_value
        bloks.append(Blocka_value)
        allW += Blocka_value._get_right()

        Box = "Box" + str(x)
        Box_value = DWIMBLOCK([box], (0, Blocka_value._get_top() + BT), (LEFT, TOP_BASELINE), (1*72, 0), layer=0)
        globals()[Box] = Box_value
        bxs.append(Box_value)
        allW += Box_value._get_right()

    globals()[Blocka] = None  ### Clear the global list so they don't create the same last block twice.
    globals()[Box] = None

    allW += (Aspc * (cnt-1)) + (Bspc * cnt) ### Add the widths of the multiple spaces between blocks to the total width.
    NL -= allW  ### Subtract the total width from the page width.  This will be divided in half so it centers all blocks.

    for i in range(len(bloks)):  ### Move all the blocks to it's proper position, all centered on the page.
        if (i == 0):
            bxs[i].move(NL/2, (maxlines-len(addresses[i]))*9.2)
            bloks[i].move(bxs[i]._get_right()+Bspc, (maxlines-len(addresses[i]))*9.2)
        else:
            bxs[i].move(bloks[i-1]._get_right()+Aspc, (maxlines-len(addresses[i]))*9.2)
            bloks[i].move(bxs[i]._get_right()+Bspc, (maxlines-len(addresses[i]))*9.2)
