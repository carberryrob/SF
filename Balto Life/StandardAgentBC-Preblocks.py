# Enable logic before blocks section

if card_photo == '':
    card_photo = 'standard_backer_no-photo.pdf'
    if card_facebook == 'No' and card_linkedin == 'No':
        NameBlock = DWIMBLOCK([LEFT, WRAP, F6, name_first, IF(' ', name_last), NEWLINE, F2, name_suffix, NEWLINE, F3, card_title1, NEWLINE], (2.0*72, 1.03*72), (LEFT, BOTTOM), (1.375*72, 0))
    else:
        NameBlock = DWIMBLOCK([LEFT, WRAP, F6, name_first, IF(' ', name_last), NEWLINE, F2, name_suffix, NEWLINE, F3, card_title1, NEWLINE], (2.0*72, 1.2*72), (LEFT, BOTTOM), (1.375*72, 0))
        FaceBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_facebook), xscale=1.0, yscale=1.0)], (2.0*72, 1.019*72), (LEFT, MIDDLE))

        if card_facebook == 'No':
            LinkBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_linkedin), xscale=1.0, yscale=1.0)], (2.0*72, 1.019*72), (LEFT, MIDDLE))
        else:
            LinkBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_linkedin), xscale=1.0, yscale=1.0)], (2.219*72, 1.019*72), (LEFT, MIDDLE))

else:
    card_front = 'standard_backer_w-photo.pdf'
    if card_facebook == 'No' and card_linkedin == 'No':
        NameBlock = DWIMBLOCK([LEFT, WRAP, F6, name_first, IF(' ', name_last), NEWLINE, F2, name_suffix, NEWLINE, F3, card_title1, NEWLINE], (2.73*72, 1.03*72), (LEFT, BOTTOM), (0.66*72, 0))
    else:
        NameBlock = DWIMBLOCK([LEFT, WRAP, F6, name_first, IF(' ', name_last), NEWLINE, F2, name_suffix, NEWLINE, F3, card_title1, NEWLINE], (2.73*72, 1.2*72), (LEFT, BOTTOM), (0.66*72, 0))
        FaceBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_facebook), xscale=1.0, yscale=1.0)], (2.714*72, 1.019*72), (LEFT, MIDDLE))

        if card_facebook == 'No':
            LinkBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_linkedin), xscale=1.0, yscale=1.0)], (2.714*72, 1.019*72), (LEFT, MIDDLE))
        else:
            LinkBlock = DWIMBLOCK([EPSWORD(FilenameFormat('con/%s', card_linkedin), xscale=1.0, yscale=1.0)], (2.9337*72, 1.019*72), (LEFT, MIDDLE))

if card_social == '':
    AddressBlock = DWIMBLOCK([CENTER, F4, JOIN3(JOIN3(card_street1, '  |  ', card_street2), '  |  ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), NEWLINE, JOIN3(IF('Tel: (', ph11, ') ', ph12, '-', ph13), '  |  ', JOIN3(IF('(', ph41, ') ', ph42, '-', ph43), ' ext.', ph44)), NEWLINE, JOIN3(IF('Fax: (', ph31, ') ', ph32, '-', ph33), '  |  ', IF('Mobile: (', ph21, ') ', ph22, '-', ph23)), NEWLINE, JOIN3(card_email, '  |  ', card_www), NEWLINE], (1.75*72, 0.6986*72), (CENTER, TOP_BASELINE), (3.25*72, 0))
else:
    AddressBlock = DWIMBLOCK([CENTER, F9, JOIN3(JOIN3(card_street1, '  |  ', card_street2), '  |  ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), NEWLINE, JOIN3(IF('Tel: (', ph11, ') ', ph12, '-', ph13), '  |  ', JOIN3(IF('(', ph41, ') ', ph42, '-', ph43), ' ext.', ph44)), NEWLINE, JOIN3(IF('Fax: (', ph31, ') ', ph32, '-', ph33), '  |  ', IF('Mobile: (', ph21, ') ', ph22, '-', ph23)), NEWLINE, JOIN3(card_email, '  |  ', card_social), NEWLINE, card_www, NEWLINE], (1.75*72, 0.72*72), (CENTER, TOP_BASELINE), (3.25*72, 0))


