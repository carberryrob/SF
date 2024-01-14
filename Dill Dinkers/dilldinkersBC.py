if office == '-None' or office == '':
        COND('A Person is required!')
else:
        vspc = 9
        MainText = DWIMLINES([LEFT, F2, name_first, IF(' ', name_middle), IF(' ', name_last), NEWLINE,
        F4, WRAPON(card_title1, '&', wrap_before =1), NEWLINE,
        NOWRAP, card_title2, NEWLINE,
        card_title3, NEWLINE,
        IFSET(ph1,VSPACER(vspc)), IFSET(ph1, ['O: ', COL, ph1]), NEWLINE,
        IFSET(ph2, ['C: ', COL, ph2]), NEWLINE,
        VSPACER(vspc), card_email, NEWLINE,
        LinkedIn, NEWLINE,
        VSPACER(vspc), F8, 'www.dilldinkers.com', NEWLINE],[], (1.95*72,1.75*72))

        lines = len(MainText)
        if (lines >= 12):
                vspc = 8

                MainText = DWIMLINES([LEFT, F2, name_first, IF(' ', name_middle), IF(' ', name_last), NEWLINE,
                F4, WRAPON(card_title1, '&', wrap_before =1), NEWLINE,
                NOWRAP, card_title2, NEWLINE,
                card_title3, NEWLINE,
                IFSET(ph1,VSPACER(vspc)), IFSET(ph1, ['O: ', COL, ph1]), NEWLINE,
                IFSET(ph2, ['C: ', COL, ph2]), NEWLINE,
                VSPACER(vspc), card_email, NEWLINE,
                LinkedIn, NEWLINE,
                VSPACER(vspc), F8, 'www.dilldinkers.com', NEWLINE],[], (1.95*72,1.75*72))

        # MainBlock = DWIMBLOCK([MainText], (1.4*72, 1.631945*72), (LEFT, TOP_BASELINE), (1.85*72,0), layer=0)
        MainBlock = DWIMBLOCK([MainText], (1.45*72, 1*72), (LEFT, MIDDLE), (1.95*72,1.75*72), layer=0)


