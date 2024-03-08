CENTER, F1, CASE('upper'), name_first, IF(' ', name_last), NEWLINE,
F4, card_title1, CASE('None'), NEWLINE,
VSPACER(5.8), F6, card_department, NEWLINE,
VSPACER(2), F4, CHAIN(card_street1, [F5, ' | ', F4], card_street2, [F5, ' | ', F4], [card_city, IF(', ', card_state), IF(' ', card_zip)]), NEWLINE,
CHAIN(Phone1Word, [F5, ' | ', F4], Phone2Word), NEWLINE,
F4, card_email, NEWLINE