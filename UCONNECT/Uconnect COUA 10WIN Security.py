# Enable logic before blocks section

lft = 1.1808*72
add1 = None
if card_office != '-None':
     add1 = DWIMLINES([CENTER, F1, card_street1, NEWLINE,
     card_street2, NEWLINE,
     JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)), NEWLINE])
Block1a = DWIMBLOCK([add1], (lft, 3.15*72), (CENTER, TOP), (1.65*72, 0), uniform_linescale=1, layer=0)
