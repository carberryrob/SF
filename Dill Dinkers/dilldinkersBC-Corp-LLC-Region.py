# Enable logic before blocks section

if (Location == '-None' or Location == ''):
     COND('A Card Type is required!')
else:
     vspc = 7 #9
     MainText = DWIMLINES([LEFT, F2, name_first, IF(' ', name_last), NEWLINE,
     F4, WRAPON(card_title1, '&', wrap_before =1), NEWLINE,
     NOWRAP, card_title2, NEWLINE,
     card_title3, NEWLINE,
     IFSET(Phone1Word or Phone2Word, VSPACER(vspc)), IFSET(Phone1Word, ['P: ', COL, Phone1Word]), NEWLINE,
     IFSET(Phone2Word, ['D: ', COL, Phone2Word]), NEWLINE,
     IFSET(card_email or LinkedIn, VSPACER(vspc)), card_email, NEWLINE,
     LinkedIn, NEWLINE,
     VSPACER(vspc), F8, 'www.dilldinkers.com', NEWLINE],[], (1.95*72,1.625*72))

     lines = len(MainText)

     if (lines >= 12):
          vspc = 6 #8
          MainText = DWIMLINES([LEFT, F2, name_first, IF(' ', name_last), NEWLINE,
          F4, WRAPON(card_title1, '&', wrap_before =1), NEWLINE,
          NOWRAP, card_title2, NEWLINE,
          card_title3, NEWLINE,
          IFSET(Phone1Word or Phone2Word, VSPACER(vspc)), IFSET(Phone1Word, ['P: ', COL, Phone1Word]), NEWLINE,
          IFSET(Phone2Word, ['D: ', COL, Phone2Word]), NEWLINE,
          IFSET(card_email or LinkedIn, VSPACER(vspc)), card_email, NEWLINE,
          LinkedIn, NEWLINE,
          VSPACER(vspc), F8, 'www.dilldinkers.com', NEWLINE],[], (1.95*72,1.625*72))

     MainBlock = DWIMBLOCK([MainText], (1.45*72, 1*72), (LEFT, MIDDLE), (1.95*72,1.625*72), layer=0)
