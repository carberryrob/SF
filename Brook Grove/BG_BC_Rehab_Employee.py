################################
###  Rob Carberry 4/17/2024  ###
################################

try:
     creds = credentials.split(', ')
     creds1 = ''
     creds2 = ''
     if len(creds) > 3:
          for i in range(3):
               creds1 += creds[i] + ', '
          for i in range(3, len(creds)):
               creds2 += creds[i] + ', '
          credentials = creds1[:-2]
          credentials2 = creds2[:-2]
          AddressBlock = DWIMBLOCK([RIGHT, F2, name_first, IF(' ', name_last), IF(', ', credentials), NEWLINE, credentials2, NEWLINE, F3, VSPACER(2), ' ', NEWLINE], (3.348614*72, 1.662501*72), (RIGHT, TOP_BASELINE), (2*72,0), uniform_linescale=1, layer=0)
          TitleBlock = DWIMBLOCK([RIGHT, F3, card_title1, NEWLINE], (3.348614*72, AddressBlock._get_bottom()), (RIGHT, TOP_BASELINE), (1.65*72,0), layer=0)
     else:
          AddressBlock = DWIMBLOCK([RIGHT, F2, name_first, IF(' ', name_last), IF(', ', credentials), NEWLINE, F3, VSPACER(2), card_title1, NEWLINE], (3.348614*72, 1.662501*72), (RIGHT, TOP_BASELINE), (2*72,0), layer=0)
except:
     pass
# AddressBlock = DWIMBLOCK([RIGHT, F2, name_first, IF(' ', name_last), IF(WRAPHERE(', '), credentials), NEWLINE, F3, VSPACER(2), card_title1, NEWLINE], (3.348614*72, 1.662501*72), (RIGHT, TOP_BASELINE), (2.075*72,0), layer=0)
