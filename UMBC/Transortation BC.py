F1 = FONT('AvenirNextLTPro-Bold', 7, 0.35, tracking=25)
F2 = FONT('AvenirLTStd-Oblique', 7, 0.35, tracking=15)
F3 = FONT('AvenirNextLTPro-Bold', 7, 1.05, tracking=0)
F4 = FONT('AvenirNextLTPro-Bold', 7, 0.35, tracking=0)
F5 = FONT('AvenirLTStd-Roman', 7, 1.05, tracking=0)
F6 = FONT('AvenirLTStd-Roman', 7, 0.91, tracking=0)
F7 = FONT('AvenirLTStd-Roman', 7, 0.91, tracking=25)

if (card_city == 'Rockville'):
    card_www2 = 'shadygrove.umbc.edu'
else:
    card_department4 = 'University of Maryland, Baltimore County'

PersonalBlock = DWIMBLOCK([
    LEFT, F1, name_full, IF(', ', JOIN3(name_grad, ' ', name_creds)), NEWLINE,
    F2, card_title1, NEWLINE,
    card_title2, NEWLINE,
    card_title3, NEWLINE], (42.5, 96.48), (LEFT, TOP))

AddressBlock = DWIMBLOCK([
    CASE('upper'), F3, card_department, NEWLINE,
    F4, card_department2, NEWLINE,
    card_department3, NEWLINE,
    CASE('None'), F5, card_department4, NEWLINE,
    card_building, NEWLINE,
    JOIN3(card_street1, ', ', JOIN3(card_street2, ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip)))), NEWLINE], (42.5, PersonalBlock._get_bottom() - 7.9776), (LEFT, TOP))

ContactBlock = DWIMBLOCK([
    F6, JOIN3(card_email2, ' // ', IF('p: ', Phone1Word)), NEWLINE,
    F7, JOIN3(IF('c: ', Phone2Word), ' // ', JOIN3(IF('f: ', Phone3Word), ' // ', IF('l: ', Phone4Word))), NEWLINE,
    IF('web: ', card_www2), NEWLINE,
    JOIN3(IF('web: ', card_www), ' // ', IF('TTY: ', Phone5Word)), NEWLINE], (42.5, AddressBlock._get_bottom() - 6.5088), (LEFT, TOP))

numLines = len(PersonalBlock.lines) + len(AddressBlock.lines) + len(ContactBlock.lines)

if (numLines > 12):
    COND("Too many lines of text. Please delete some lines to create space.")
elif (numLines > 11):
    F1 = FONT('AvenirNextLTPro-Bold', 7, 0.14, tracking=25)
    F2 = FONT('AvenirLTStd-Oblique', 7, 0.14, tracking=15)
    F3 = FONT('AvenirNextLTPro-Bold', 7, 0.35, tracking=0)
    F4 = FONT('AvenirNextLTPro-Bold', 7, 0.35, tracking=0)
    F5 = FONT('AvenirLTStd-Roman', 7, 0.35, tracking=0)
    F6 = FONT('AvenirLTStd-Roman', 7, 0.35, tracking=0)
    F7 = FONT('AvenirLTStd-Roman', 7, 0.35, tracking=25)
    
    ContactBlock = DWIMBLOCK([
        F6, JOIN3(card_email2, ' // ', IF('p: ', Phone1Word)), NEWLINE,
        F7, JOIN3(IF('c: ', Phone2Word), ' // ', JOIN3(IF('f: ', Phone3Word), ' // ', IF('l: ', Phone4Word))), NEWLINE,
        IF('web: ', card_www2), NEWLINE,
        JOIN3(IF('web: ', card_www), ' // ', IF('TTY: ', Phone5Word)), NEWLINE], (42.5, AddressBlock._get_bottom() - 2.7656), (LEFT, TOP))


