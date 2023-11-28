card_award = card_award.strip()
if card_award:
    AwardBlock = DWIMBLOCK([EPSWORD('con/Award.pdf', xscale=1, yscale=1), LEFT, F3, SPACER(9.5), card_award, NEWLINE], (0.687501 * 72, 9.748 * 72), (LEFT, BOTTOM), layer=0)

