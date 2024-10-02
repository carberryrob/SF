# Updated 9/12/2024 Rob Carberry

if Physician_List == '-None':
     COND('You must first select a Physician from the Physician List to continue.')
else:
     cnt = 1
     addused = []
     dash = Physician_List.rfind(": ")+2 ### Address name starts 2 char after the colon.
     addused.append(Physician_List[dash:]) ### Add 1st address to the list that test for unique addresses.
     wwwBlock = None

     ### add remaining addresses to the list and test that the address doesn't exist twice.
     for address in (card2_address, card3_address):
          if address != '-None':
               if address not in addused:
                    cnt += 1
                    addused.append(address)
               else:
                    COND('The address for ' + address.upper() + ' is already selected.  Only unique addresses can be added to the envelope.')
     address = None

     # try:
     #      tag = __tag__
     #      if (tag.startswith('AUS')):
     #           wwwurl = 'arizonaurologyspecialists.com' 
     #      elif (tag.startswith('COUA')):
     #           wwwurl = 'coloradouro.com' 
     #      elif (tag.startswith('CUA')):
     #           wwwurl = 'chesapeakeurology.com'
     #      elif (tag.startswith('TUA')):
     #           wwwurl = 'tnurology.com'
     # except:
     #      pass

     if (ph1):
          Phone1Word = ph1
     if (ph3):
          Phone3Word = ph3

     ### If credentials are 5 char or less, then combine them on the same line.

     if (len(physician) + len(credentials) <= 27):
               physician = physician, IF(', ', credentials)
               credentials = ''
     else:
          if (len(credentials)<=5):
               physician = physician, IF(', ', credentials)
               credentials = ''

     bloks = []
     height = 0
     
     ### Create all the blocks so they can be tested for the first time for horizontal and vertical size.  They will be reduced to fit later.
     if Physician_List != '-None':
          ### Create Doctor and title block.
          DocBlock = DWIMBLOCK([LEFT, F6, physician, NEWLINE,
          F6, credentials, NEWLINE,
          F8, VSPACER(2), WRAP, card_title1, NOWRAP, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          bloks.append(DocBlock)

          ### Create address 1, put address on one line unless to long then wrap street2.
          Add1Block = DWIMBLOCK([LEFT, F4, card_street1, IF(WRAPHERE(', '), card_street2), NEWLINE,
          JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          bloks.append(Add1Block)
               
          ### Create office and fax numbers.
          PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, 'Office'), F8, IFSET(Phone1Word, ' '), F1, Phone1Word, NEWLINE,
          F2, IFSET(Phone3Word, 'Fax'), F8, IFSET(Phone3Word, ' '), F1, Phone3Word, NEWLINE,
          F2, IFSET(Phone2Word, 'Direct'), F8, IFSET(Phone2Word, ' '), F1, Phone2Word, NEWLINE,
          F8, IFSET(card_email, VSPACER(2)), card_email, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          bloks.append(PhnBlock)

          # ### Create www url.
          # wwwBlock = DWIMBLOCK([LEFT, F5, wwwurl, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          # bloks.append(wwwBlock)
          
     if card2_address != '-None':
          ### Create 2nd address selected.
          Add2Block = DWIMBLOCK([LEFT, F4, card2_street1, IF(WRAPHERE(', '), card2_street2), NEWLINE,
          JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          bloks.append(Add2Block)

     if card3_address != '-None':
          ### Create 3rd address selected.
          Add3Block = DWIMBLOCK([LEFT, F4, card3_street1, IF(WRAPHERE(', '), card3_street2), NEWLINE,
          JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
          bloks.append(Add3Block)

     ### Add more or less space between blocks depending on how many addresses are selected.
     if card2_address == '-None' and card3_address == '-None':
          vspc = 6
     else:
          vspc = 5

     ### Measure the height, and test to see if the blocks run to close to the end of the card.
     ### We need to center 0.125" from the top and bottom, and make sure we have 0.125" to the right.
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

     # wwwInline=True # Start with wwwurl inline on the right
     # if (height > 126):
          ### If the text block's height is taller then 1.75" then redraw the url to below the logo for room.
     wwwInline=False
     wwwBlock = DWIMBLOCK([CENTER, F5, wwwurl, NEWLINE], (0.97516*72, 0), (CENTER, BOTTOM), (1.4*72,0), layer=0)
     #COND(wwwBlock.height)
     
     ### Loop throught all the blocks reducing the font size by 0.1 points until
     ### the blocks are 1.75" or smaller and stop 0.125" from the right.
     while (height > 126 or maxright > 243):
          bloks = []
          F1.pointsize = F1.pointsize - 0.1
          F2.pointsize = F2.pointsize - 0.1
          F3.pointsize = F3.pointsize - 0.1
          F4.pointsize = F4.pointsize - 0.1
          # if wwwInline:
          #      F5.pointsize = F5.pointsize - 0.1 ### The url only resizes if it is not under the logo.
          F6.pointsize = F6.pointsize - 0.1
          F7.pointsize = F7.pointsize - 0.1
          F8.pointsize = F8.pointsize - 0.1

          ### Redraw all the blocks using the new point size.
          if Physician_List != '-None':
               DocBlock = DWIMBLOCK([LEFT, F6, physician, NEWLINE,
               F6, credentials, NEWLINE,
               F8, VSPACER(2), WRAP, card_title1, NOWRAP, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               bloks.append(DocBlock)

               Add1Block = DWIMBLOCK([LEFT, F4, card_street1, IF(WRAPHERE(', '), card_street2), NEWLINE,
               JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               bloks.append(Add1Block)
                    
               PhnBlock = DWIMBLOCK([LEFT, F2, IFSET(Phone1Word, 'Office'), F8, IFSET(Phone1Word, ' '), F1, Phone1Word, NEWLINE,
               F2, IFSET(Phone3Word, 'Fax'), F8, IFSET(Phone3Word, ' '), F1, Phone3Word, NEWLINE,
               F2, IFSET(Phone2Word, 'Direct'), F8, IFSET(Phone2Word, ' '), F1, Phone2Word, NEWLINE,
               F8, IFSET(card_email, VSPACER(2)), card_email, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               bloks.append(PhnBlock)

               # if wwwInline:
               #      wwwBlock = DWIMBLOCK([LEFT, F5, wwwurl, NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               #      bloks.append(wwwBlock)
               
          if card2_address != '-None':
               Add2Block = DWIMBLOCK([LEFT, F4, card2_street1, IF(WRAPHERE(', '), card2_street2), NEWLINE,
               JOIN3(card2_city, ', ', JOIN3(card2_state, ' ', card2_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               bloks.append(Add2Block)

          if card3_address != '-None':
               Add3Block = DWIMBLOCK([LEFT, F4, card3_street1, IF(WRAPHERE(', '), card3_street2), NEWLINE,
               JOIN3(card3_city, ', ', JOIN3(card3_state, ' ', card3_zip)), NEWLINE], (1.94*72, 144), (LEFT, TOP), (1.4*72,0), layer=0)
               bloks.append(Add3Block)

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
     top = (height-146.40625)/2
     DocBlock.move(0, top)
     moveby = (146.40625-DocBlock._get_bottom() + vspc) * -1
     Add1Block.move( 0, moveby )
     moveby = (146.40625-Add1Block._get_bottom() + vspc) * -1
     if card2_address != '-None':
          Add2Block.move( 0, moveby )
          moveby = (146.40625-Add2Block._get_bottom() + vspc) * -1
     if card3_address != '-None':
          Add3Block.move( 0, moveby )
          moveby = (146.40625-Add3Block._get_bottom() + vspc) * -1
     PhnBlock.move( 0, moveby )
     moveby = (146.40625-PhnBlock._get_bottom() + vspc) * -1
     
     if (wwwInline):
          wwwBlock.move( 0, moveby )
     else:
          logoheight = 0.66632*72
          moveby = (72-(logoheight/2)-5)
          wwwBlock.move( 0, (moveby) )

     #TestBlock = DWIMBLOCK([LEFT, F8, 'vspc: ' + str(vspc), NEWLINE, 'wwwInline: ' + str(wwwInline), NEWLINE, 'H: ' + str(h), NEWLINE, 'R: ' + str(r), NEWLINE, NEWLINE], (0, 0), (LEFT, BOTTOM), (3.5*72,0), layer=0)
