# Created 7/6/2023 Rob Carberry
# Updated 7/7/2023 Rob Carberry
# Updated 7/10/2023 Rob Carberry

### add addresses to the list and test that the address doesn't exist twice.
cnt = 0
addused = []
for address in (card_address, card2_address, card3_address, card4_address, card5_address, card6_address):
    if address != '-None':
        if address not in addused:
            cnt += 1
            addused.append(address)
        else:
            COND('The address for ' + address.upper() + ' is already selected.  Only unique addresses can be added to the Letterhead.')
address = None

### State Logic - Abbreviation to Longname (without territories):
### This converts to the full state name for one address version.
card_state_dict={
    'AL':'Alabama',
    'AK':'Alaska',
    'AZ':'Arizona',
    'AR':'Arkansas',
    'CA':'California',
    'CO':'Colorado',
    'CT':'Connecticut',
    'DE':'Delaware',
    'DC':'District Of Columbia',
    'FL':'Florida',
    'GA':'Georgia',
    'HI':'Hawaii',
    'ID':'Idaho',
    'IL':'Illinois',
    'IN':'Indiana',
    'IA':'Iowa',
    'KS':'Kansas',
    'KY':'Kentucky',
    'LA':'Louisiana',
    'ME':'Maine',
    'MD':'Maryland',
    'MA':'Massachusetts',
    'MI':'Michigan',
    'MN':'Minnesota',
    'MS':'Mississippi',
    'MO':'Missouri',
    'MT':'Montana',
    'NE':'Nebraska',
    'NV':'Nevada',
    'NH':'New Hampshire',
    'NJ':'New Jersey',
    'NM':'New Mexico',
    'NY':'New York',
    'NC':'North Carolina',
    'ND':'North Dakota',
    'OH':'Ohio',
    'OK':'Oklahoma',
    'OR':'Oregon',
    'PA':'Pennsylvania',
    'RI':'Rhode Island',
    'SC':'South Carolina',
    'SD':'South Dakota',
    'TN':'Tennessee',
    'TX':'Texas',
    'UT':'Utah',
    'VT':'Vermont',
    'VA':'Virginia',
    'WA':'Washington',
    'WV':'West Virginia',
    'WI':'Wisconsin',
    'WY':'Wyoming'
}

### Variable declarations
sadd = None
add1 = None
add2 = None
add3 = None
add4 = None
add5 = None
add6 = None
x = -1
allW = 0

BT = -3.5 ### Adjustment value for the check boxes.
top = (0.4125*72) ### This places the bottom of the addresses.
stop = (0.45*72) ### This places the bottom of the address for the one address version.
Bspc = 2.25 ### Space between the check box and the address block.

### Set the space between address blocks based on the number of addresses.
Aspc = 0
if cnt > 1:
    Aspc = 67.5 / (cnt-1)

### Set the max width of an address block based on the number of addresses.
if cnt <= 4:
    maxW = 2*72
elif cnt == 5:
    maxW = 1.3*72
else:
    maxW = 1*72

NL = (8.5*72) ### This is the page width.  Used to center the addresses.

### Declare the python list that will be used to iterate through later.
addresses = []
bloks = []
bxs = []

### This will be used to create the check boxes multiple times.
box = DWIMLINES([LEFT, F5, BORDER(WORD('q ',F5),0.3,C1,1), NEWLINE])

### For each address selected, create DWIMLINES for use in DWIMBLOCKS.  These will be added to python list.
### The list will be used later to measure the dimensions before we add them to DWIMBLOCKS.
### For each address selection we create them for both one, or multi address versions.  This allows the user
### to select any drop down in any order without getting an error.
if card_address != '-None':
    if (card_phone):
        Phone1Word = card_phone
    #card_st = card_state_dict.get(card_state,'')
    add1 = DWIMLINES([LEFT, F4, card_street1, IF(WRAPHERE(', '), card_street2), NEWLINE,
    JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add1)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card_street1, F3, '    |    ', F1, card_street2, F3, '    |    ', F1, JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), F3, '    |    ', F1, Phone1Word), NEWLINE])
if card2_address != '-None':
    if (card2_phone):
        Phone1Word = card2_phone
    #card2_st = card_state_dict.get(card2_state,'')
    add2 = DWIMLINES([LEFT, F4, card2_street1, IF(WRAPHERE(', '), card2_street2), NEWLINE,
    JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add2)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card2_street1, F3, '    |    ', F1, card2_street2, F3, '    |    ', F1, JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), F3, '    |    ', F1, Phone1Word), NEWLINE])
if card3_address != '-None':
    if (card3_phone):
        Phone1Word = card3_phone
    #card3_st = card_state_dict.get(card3_state,'')
    add3 = DWIMLINES([LEFT, F4, card3_street1, IF(WRAPHERE(', '), card3_street2), NEWLINE,
    JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add3)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card3_street1, F3, '    |    ', F1, card3_street2, F3, '    |    ', F1, JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), F3, '    |    ', F1, Phone1Word), NEWLINE])
if card4_address != '-None':
    if (card4_phone):
        Phone1Word = card4_phone
    #card4_st = card_state_dict.get(card4_state,'')
    add4 = DWIMLINES([LEFT, F4, card4_street1, IF(WRAPHERE(', '), card4_street2), NEWLINE,
    JOIN3(card4_city, ', ', JOIN3(card4_state, ' ', card4_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add4)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card4_street1, F3, '    |    ', F1, card4_street2, F3, '    |    ', F1, JOIN3(card4_city, ', ', JOIN3(card4_state, ' ', card4_zip)), F3, '    |    ', F1, Phone1Word), NEWLINE])
if card5_address != '-None':
    if (card5_phone):
        Phone1Word = card5_phone
    #card5_st = card_state_dict.get(card5_state,'')
    add5 = DWIMLINES([LEFT, F4, card5_street1, IF(WRAPHERE(', '), card5_street2), NEWLINE,
    JOIN3(card5_city, ', ', JOIN3(card5_state, ' ', card5_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add5)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card5_street1, F3, '    |    ', F1, card5_street2, F3, '    |    ', F1, JOIN3(card5_city, ', ', JOIN3(card5_state, ' ', card5_zip)), F3, '    |    ', F1, Phone1Word), NEWLINE])
if card6_address != '-None':
    if (card6_phone):
        Phone1Word = card6_phone
    #card6_st = card_state_dict.get(card6_state,'')
    add6 = DWIMLINES([LEFT, F4, card6_street1, IF(WRAPHERE(', '), card6_street2), NEWLINE,
    JOIN3(card6_city, ', ', JOIN3(card6_state, ' ', card6_zip)), NEWLINE, Phone1Word, NEWLINE], [], (maxW, 0))
    addresses.append(add6)
    sadd = DWIMLINES([LEFT, F1, CHAIN(card6_street1, F3, '    |    ', F1, card6_street2, F3, '    |    ', F1, JOIN3(card6_city, ', ', JOIN3(card6_state, ' ', card6_zip)), F3, '    |    ', F1, Phone1Word, F3, '    |    ', F1, 'arizonaurologyspecialists.com'), NEWLINE])

### Count the number of lines in each address block, and remember the max count of lines that
### will be used to make sure three or four line blocks align with the tallest block.
maxlines=0
for adds in addresses:
    lines = len(adds)
    if lines:
        maxlines = max(maxlines, lines)

if cnt == 1:  ### If only one address is selected, create the special address block that is all on one line separated with pipes '|'
    Blocka1 = DWIMBLOCK([sadd], (0, stop), (LEFT, BOTTOM), (8*72, 0), uniform_linescale=1, layer=0)
    allW += Blocka1._get_right()
    NL -= allW ### Subtract the total line width from the page width.  This will be divided in half so it centers the line.
    Blocka1.move(NL/2, 0) ### Divide in half so it centers the line.

elif cnt > 1: ### Create the multiple address blocks using python global list, and add them to a standard python list used to move them to proper position.
    for adds in addresses:
        x += 1
        Blocka = "Blocka" + str(x)
        Blocka_value = DWIMBLOCK([adds], (0, top), (LEFT, BOTTOM), (maxW, 0), uniform_linescale=1, layer=0)
        globals()[Blocka] = Blocka_value
        bloks.append(Blocka_value)
        allW += Blocka_value._get_right()

        Box = "Box" + str(x)
        Box_value = DWIMBLOCK([box], (0, Blocka_value._get_top() + BT), (LEFT, TOP), (1*72, 0), layer=0)
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
