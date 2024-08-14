



F1, LEFT, CASE('upper'), dateday, IF(', ', datemo), IF(' ', datedy), IF(', ', dateyr), IFSET(time3, ':  ', IFSET(time4, ':  ')), F2, IFSET(time4, [IF(time3, [F11, startampm, ' - ']), F2, IF(time4, [F11, endampm])], IF(time3, [F11, startampm])), NEWLINE


LEFT, IFSET(card_street1, EPSWORD('con/everstand location marker-01.eps', xscale=1, yscale=1)), F33, card_street1, IF(', ', card_city), IF(', ', card_state), IF(' ', card_zip), NEWLINE


F6, LEFT, IFSET(first_last, ['For more information contact ', first_last, ':']), NEWLINE,
VSPACER(3), F7, JOIN3(card_email, '  |  ', Phone1Word), NEWLINE


F4, LEFT, IF(number, '+'), NEWLINE,
IFSET(number, [F9, VSPACER(8), 'AVAILABLE POSITIONS', NEWLINE]),
IFSET(card_title, [F9, VSPACER(4), 'INCLUDING:', NEWLINE], IFSET(card_title2, [F9, VSPACER(4), 'INCLUDING:', NEWLINE], IFSET(card_title3, [F9, VSPACER(4), 'INCLUDING:', NEWLINE], IFSET(card_title4, [F9, VSPACER(4), 'INCLUDING:', NEWLINE]))))


F5, LEFT, IF(u'\u2022', '  ', ' ', card_title), IFSET(card_title2, [], IFSET(card_title3, [], IFSET(card_title4, [], IFSET(card_title, [F55, ' & More'])))), NEWLINE,
IFSET(card_title2, VSPACER(5)), IF(u'\u2022', '  ', ' ', card_title2), IFSET(card_title3, [], IFSET(card_title4, [], IFSET(card_title2, [F55, ' & More']))), NEWLINE,
IFSET(card_title3, VSPACER(5)), IF(u'\u2022', '  ', ' ', card_title3), IFSET(card_title4, [], IFSET(card_title3, [F55, ' & More'])), NEWLINE,
IFSET(card_title4, VSPACER(5)), IF(u'\u2022', '  ', ' ', card_title4), IFSET(card_title4, [F55, ' & More']), NEWLINE

IFSET(card_title2, '', IFSET(card_title3, '', IFSET(card_title4, '',' & More')))