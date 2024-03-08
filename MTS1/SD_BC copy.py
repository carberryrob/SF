CENTER, F1, name_first, IF(' ', name_last), NEWLINE,
F4, CASE('upper'), card_title1, CASE('None'), NEWLINE,
VSPACER(5.8), F2, card_department, NEWLINE,
F4, CHAIN(card_street1, [F5, ' | ', F4], card_street2, [F5, ' | ', F4], [card_city, IF(', ', card_state), IF(' ', card_zip)]), NEWLINE,
CHAIN(Phone1Word, [F5, ' | ', F4], Phone2Word), NEWLINE,
VSPACER(6.1), F2, card_email, NEWLINE