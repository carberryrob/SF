LEFT, F1, card_street1, NEWLINE,
card_street2, NEWLINE,
F5, card_city, IF(', ', card_state), IF(' ', card_zip), NEWLINE,
F1, IFSET(card_city, VSPACER(4.4), VSPACER(12.4)), 'www.clearviewgroup.us', NEWLINE,
IFSET(Phone1Word, [VSPACER(4.4), Phone1Word, NEWLINE]),
IFSET(Phone2Word, [VSPACER(4.4), Phone2Word, NEWLINE]),
IFSET(card_email, [VSPACER(4.4), card_email]), NEWLINE