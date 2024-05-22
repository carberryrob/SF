# Updated 5/22/2024 Rob Carberry

# COND('|' + card_phone + '|' + card_fax + '|')
if (card_phone != '--  Ext '):
     if (card_phone[-4:] == 'Ext '):
          Phone1Word = card_phone[:-6]
     else:
          Phone1Word = CHAIN(card_phone1, '-', card_phone2, '-', card_phone3, [F2, '  Ext '], [F1, card_phone4])
else:
     Phone1Word = None

if (card_fax != '--'):
     Phone3Word = card_fax
else:
     Phone3Word = None

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
if (Phone1Word or Phone2Word or Phone3Word or Phone4Word or card_email):
     # PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, ['Office', F8, ' ', F1, Phone1Word, IF([F2, '  Ext ', F1],ph1_ext_lbl)]), NEWLINE,
     PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, ['Office', F8, ' ', F1, Phone1Word]), NEWLINE,
     F2, IFSET(Phone4Word, ['Direct Line', F8, ' ', F1, Phone4Word]), NEWLINE,
     F2, IFSET(Phone2Word, ['Mobile', F8, ' ', F1, Phone2Word]), NEWLINE,
     F2, IFSET(Phone3Word, ['Fax', F8, ' ', F1, Phone3Word]), NEWLINE,
     F2, IF(WRAPHERE('Email '), F1, card_email), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.45*72,0), layer=0) 
     bloks.append(PhnBlock)

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

### Loop throught all the blocks reducing the font size by 0.1 points until
### the blocks are 1.75" or smaller and stop 0.125" from the right.
while (height > 126 or maxright > 243):
     bloks = []
     F1.pointsize = F1.pointsize - 0.1
     F2.pointsize = F2.pointsize - 0.1
     F3.pointsize = F3.pointsize - 0.1
     F4.pointsize = F4.pointsize - 0.1
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
               
     if (Phone1Word or Phone2Word or Phone3Word or Phone4Word or card_email):
          PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, ['Office', F8, ' ', F1, Phone1Word]), NEWLINE,
          F2, IFSET(Phone4Word, ['Direct Line', F8, ' ', F1, Phone4Word]), NEWLINE,
          F2, IFSET(Phone2Word, ['Mobile', F8, ' ', F1, Phone2Word]), NEWLINE,
          F2, IFSET(Phone3Word, ['Fax', F8, ' ', F1, Phone3Word]), NEWLINE,
          F2, IF(WRAPHERE('Email '), F1, card_email), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.45*72,0), layer=0) 
          bloks.append(PhnBlock)

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
moveby = (height-146.40625)/2
if (name_first):
     NameBlock.move(0, moveby)
     moveby = (146.40625-NameBlock._get_bottom() + vspc) * -1
if card_office != '-None':
     Add1Block.move( 0, moveby )
     moveby = (146.40625-Add1Block._get_bottom() + vspc) * -1
if (Phone1Word or Phone2Word or Phone3Word or Phone4Word or card_email):
     PhnBlock.move( 0, moveby )
     moveby = (146.40625-PhnBlock._get_bottom() + vspc) * -1


#TestBlock = DWIMBLOCK([LEFT, F8, 'vspc: ' + str(vspc), NEWLINE, NEWLINE, 'H: ' + str(h), NEWLINE, 'R: ' + str(r), NEWLINE, NEWLINE], (0, 0), (LEFT, BOTTOM), (3.5*72,0), layer=0)
