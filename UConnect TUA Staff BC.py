# Updated 7/05/2023 Rob Carberry

wwwurl = 'tnurology.com' ### Make url a variable to make it easier to copy code to other locations

if (card_phone):
    Phone1Word = card_phone
if (card_fax):
    Phone3Word = card_fax

bloks = []
### Create all the blocks so they can be tested for the first time for horizontal and vertical size.  They will be reduced to fit later.
### Create Name and title block.
if (name_first or name_last or card_title1 or card_title2):
    NameBlock = DWIMBLOCK([LEFT, F6, name_first, IF(' ', name_last), NEWLINE,
    F8, WRAP, card_title1, NEWLINE, card_title2, NOWRAP, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
    bloks.append(NameBlock)

if card_office != '-None':
    ### Create address 1, put address on one line unless to long then wrap street2.
    Add1Block = DWIMBLOCK([LEFT, F4, card_street1, IF(WRAPHERE(', '), card_street2), NEWLINE,
    JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
    bloks.append(Add1Block)
        
### Create office, mobile, and fax numbers.
if (Phone1Word or Phone2Word or Phone3Word or card_email):
    PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, 'Office'), F8, IFSET(Phone1Word, ' '), F1, Phone1Word, NEWLINE,
    F2, IFSET(Phone2Word, 'Mobile'), F8, IFSET(Phone2Word, ' '), F1, Phone2Word, NEWLINE,
    F2, IFSET(Phone3Word, 'Fax'), F8, IFSET(Phone3Word, ' '), F1, Phone3Word, NEWLINE,
    F2, IF(WRAPHERE('Email '), F1, card_email), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.45*72,0), layer=0) 
    bloks.append(PhnBlock)

### Create www url.
wwwBlock = DWIMBLOCK([LEFT, F5, wwwurl, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
bloks.append(wwwBlock)

vspc = 6

### Measure the height, and test to see if the blocks run to close to the end of the card.
### We need to center 0.125" from the top and bottom, and make sure we have 0.125" to the right.
height = 0
maxright=0
for block in bloks:
    height += (block._get_top()-block._get_bottom()) + vspc
    right = block._get_right()
    if right:
        maxright = max(maxright, right)
block = None
height -= vspc ### remove the trailing vspc

#h=height ### displayed for testing only
#r=maxright ### displayed for testing only

wwwInline=True # Start with wwwurl inline on the right
if (height > 126):
    ### If the text block's height is taller then 1.75" then redraw the url to below the logo for room.
    wwwInline=False
    wwwBlock = DWIMBLOCK([CENTER, F5, wwwurl, NEWLINE], (0.96275*72, 0), (CENTER, BOTTOM), (1.4*72,0), layer=0)

### Loop throught all the blocks reducing the font size by 0.1 points until
### the blocks are 1.75" or smaller and stop 0.125" from the right.
while (height > 126 or maxright > 243):
    bloks = []
    F1.pointsize = F1.pointsize - 0.1
    F2.pointsize = F2.pointsize - 0.1
    F3.pointsize = F3.pointsize - 0.1
    F4.pointsize = F4.pointsize - 0.1
    if wwwInline:
        F5.pointsize = F5.pointsize - 0.1 ### The url only resizes if it is not under the logo.
    F6.pointsize = F6.pointsize - 0.1
    F7.pointsize = F7.pointsize - 0.1
    F8.pointsize = F8.pointsize - 0.1

    ### Redraw all the blocks using the new point size.
    if (name_first or name_last or card_title1 or card_title2):
        NameBlock = DWIMBLOCK([LEFT, F6, name_first, IF(' ', name_last), NEWLINE,
        F8, WRAP, card_title1, NEWLINE, card_title2, NOWRAP, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
        bloks.append(NameBlock)

    if card_office != '-None':
        Add1Block = DWIMBLOCK([LEFT, F4, card_street1, IF(WRAPHERE(', '), card_street2), NEWLINE,
        JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
        bloks.append(Add1Block)
            
    if (Phone1Word or Phone2Word or Phone3Word or card_email):
        PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, 'Office'), F8, IFSET(Phone1Word, ' '), F1, Phone1Word, NEWLINE,
        F2, IFSET(Phone2Word, 'Mobile'), F8, IFSET(Phone2Word, ' '), F1, Phone2Word, NEWLINE,
        F2, IFSET(Phone3Word, 'Fax'), F8, IFSET(Phone3Word, ' '), F1, Phone3Word, NEWLINE,
        F2, IF(WRAPHERE('Email '), F1, card_email), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.45*72,0), layer=0)
        bloks.append(PhnBlock)

    if (wwwInline):
        wwwBlock = DWIMBLOCK([LEFT, F5, wwwurl, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
        bloks.append(wwwBlock)

    ### Now re-test the size to see if they are less then 1.75" and 0.125" from the right.
    height=0
    maxright=0
    for block in bloks:
        height += (block._get_top()-block._get_bottom()) + vspc
        right = block._get_right()
        if right:
            maxright = max(maxright, right)
    block = None
    height -= vspc
    
    if (height <= 126 and maxright <= 243):
        ### if the blocks have reduced enbough then break, otherwise loop again to reduce again.
        break

### Now that the blocks are the correct size, move them to center top and bottom
wwwHeight=0
moveby = (height-146.40625)/2
if (name_first):
    NameBlock.move(0, moveby)
    moveby = (146.40625-NameBlock._get_bottom() + vspc) * -1
if card_office != '-None':
    Add1Block.move( 0, moveby )
    moveby = (146.40625-Add1Block._get_bottom() + vspc) * -1
if (Phone1Word or Phone2Word or Phone3Word or card_email):
    PhnBlock.move( 0, moveby )
    moveby = (146.40625-PhnBlock._get_bottom() + vspc) * -1

if (wwwInline):
    wwwBlock.move( 0, moveby )
else:
    logoheight = 0.41479*72
    moveby = (72-(logoheight/2)-5)
    wwwBlock.move( 0, (moveby) )

#TestBlock = DWIMBLOCK([LEFT, F8, 'vspc: ' + str(vspc), NEWLINE, 'wwwInline: ' + str(wwwInline), NEWLINE, 'H: ' + str(h), NEWLINE, 'R: ' + str(r), NEWLINE, NEWLINE], (0, 0), (LEFT, BOTTOM), (3.5*72,0), layer=0)
