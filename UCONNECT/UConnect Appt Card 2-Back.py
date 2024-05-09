# Rob Carberry 3/23/2024

###count the number of addresses chosen.
cnt = 0
addused = []
for address in (card_address, card2_address, card3_address, card4_address, card5_address, card6_address):
     if address != '-None':
          if address not in addused:
               cnt += 1
               addused.append(address)
          else:
               COND('The address for ' + address.upper() + ' is already selected. Only unique addresses can be added to the card.')
address = None

if cnt < 4:
     ### If 3 or less addresses are selected then we leave the back blank
     COND(COND_EMPTY)
elif (cnt >= 4):
     try:
          tag = __tag__
          card_back = None
          if (tag.startswith('AUS')):
               card_back = '221295_C7AUSAuto-fillapptcardthreeaddressesbackground.pdf'   ### Since the card won't be blank we add the back layer logo.
          elif (tag.startswith('COUA')):
               card_back = '221295_C9COUAAuto-fillApptCardthreeaddressbackground.pdf'   ### Since the card won't be blank we add the back layer logo.
          elif (tag.startswith('CUA')):
               card_back = '221295_C1CUAAppointmentCardCustom.pdf'   ### Since the card won't be blank we add the back layer logo.
          elif (tag.startswith('TUA')):
               card_back = '221295_C11TUAAuto-fillApptCardthreeaddresses_bkgrd.pdf'   ### Since the card won't be blank we add the back layer logo.
     except:
          pass

     add1 = None
     add2 = None
     add3 = None
     add4 = None
     add5 = None
     add6 = None

     addresses = []

     vs = 0
     lft = 2.10
     if (cnt == 4 or cnt == 5):
          vs = 5.3
          phonespc = 3.3
     else:   
          vs = 4.3
          phonespc = 0

     if card_address != '-None':
          center1 = LINES(card_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add1 = DWIMLINES([LEFT, F11, 'q  ', IFSET(card_center,[F1, COL, center1, NEWLINE]),
          F1, COL, card_street1, NEWLINE,
          COL, card_street2, NEWLINE,
          COL, card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card_phone, 'Office'), F8, IFSET(card_phone, ' '), F1, card_phone, NEWLINE,
          COL, F2, IFSET(card_fax, 'Fax'), F8, IFSET(card_fax, ' '), F1, card_fax, NEWLINE])
          addresses.append(add1)

     if card2_address != '-None':
          center2 = LINES(card2_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add2 = DWIMLINES([LEFT, F11, 'q  ', IFSET(card2_center,[F1, COL, center2, NEWLINE]),
          F1, COL, card2_street1, NEWLINE,
          COL, card2_street2, NEWLINE,
          COL, card2_city, IF(', ', card2_state), IF(' ', card2_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card2_phone, 'Office'), F8, IFSET(card2_phone, ' '), F1, card2_phone, NEWLINE,
          COL, F2, IFSET(card2_fax, 'Fax'), F8, IFSET(card2_fax, ' '), F1, card2_fax, NEWLINE])
          addresses.append(add2)

     if card3_address != '-None':
          center3 = LINES(card3_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add3 = DWIMLINES([LEFT, F11, 'q  ', WRAP, IFSET(card3_center,[F1, COL, center3, NEWLINE]),
          NOWRAP, F1, COL, card3_street1, NEWLINE,
          COL, card3_street2, NEWLINE,
          COL, card3_city, IF(', ', card3_state), IF(' ', card3_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card3_phone, 'Office'), F8, IFSET(card3_phone, ' '), F1, card3_phone, NEWLINE,
          COL, F2, IFSET(card3_fax, 'Fax'), F8, IFSET(card3_fax, ' '), F1, card3_fax, NEWLINE])
          addresses.append(add3)

     if card4_address != '-None':
          center4 = LINES(card4_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add4 = DWIMLINES([LEFT, F11, 'q  ', IFSET(card4_center,[F1, COL, center4, NEWLINE]),
          F1, COL, card4_street1, NEWLINE,
          COL, card4_street2, NEWLINE,
          COL, card4_city, IF(', ', card4_state), IF(' ', card4_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card4_phone, 'Office'), F8, IFSET(card4_phone, ' '), F1, card4_phone, NEWLINE,
          COL, F2, IFSET(card4_fax, 'Fax'), F8, IFSET(card4_fax, ' '), F1, card4_fax, NEWLINE])
          addresses.append(add4)

     if card5_address != '-None':
          center5 = LINES(card5_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add5 = DWIMLINES([LEFT, F11, 'q  ', IFSET(card5_center,[F1, COL, center5, NEWLINE]),
          F1, COL, card5_street1, NEWLINE,
          COL, card5_street2, NEWLINE,
          COL, card5_city, IF(', ', card5_state), IF(' ', card5_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card5_phone, 'Office'), F8, IFSET(card5_phone, ' '), F1, card5_phone, NEWLINE,
          COL, F2, IFSET(card5_fax, 'Fax'), F8, IFSET(card5_fax, ' '), F1, card5_fax, NEWLINE])
          addresses.append(add5)

     if card6_address != '-None':
          center6 = LINES(card6_center, wrap=72, font=F1, align=LEFT, newline=[NEWLINE,COL], wrap_lf=0)
          add6 = DWIMLINES([LEFT, F11, 'q  ', IFSET(card6_center,[F1, COL, center6, NEWLINE]),
          F1, COL, card6_street1, NEWLINE,
          COL, card6_street2, NEWLINE,
          COL, card6_city, IF(', ', card6_state), IF(' ', card6_zip), NEWLINE,
          VSPACER(phonespc),
          COL, F2, IFSET(card6_phone, 'Office'), F8, IFSET(card6_phone, ' '), F1, card6_phone, NEWLINE,
          COL, F2, IFSET(card6_fax, 'Fax'), F8, IFSET(card6_fax, ' '), F1, card6_fax, NEWLINE])
          addresses.append(add6)

     realadd1 = None
     realadd2 = None
     realadd3 = None

     if (cnt == 4):  ### If 4 addresses do 2 on front and 2 on back
          for i in range(2, len(addresses)):
               if (addresses[i]):
                    if (i==2):
                         realadd1 = addresses[i]
                    elif (i==3):
                         realadd2 = addresses[i]
                    elif (i==4):
                         realadd3 = addresses[i]
     else:
          for i in range(3, len(addresses)):
               if (addresses[i]):
                    if (i==3):
                         realadd1 = addresses[i]
                    elif (i==4):
                         realadd2 = addresses[i]
                    elif (i==5):
                         realadd3 = addresses[i]

     Block1 = DWIMBLOCK([CHAIN(realadd1,VSPACER(vs), realadd2,VSPACER(vs), realadd3)], (lft*72, 1.00*72), (LEFT, MIDDLE), (1.25*72, 1.75*72), layer=0)
