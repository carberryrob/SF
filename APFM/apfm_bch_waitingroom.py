#  Rob Carberry 6/6/2024

if (len(photo) > 0):
     LeftNameBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), NEWLINE, IFSET(Phone1Word, VSPACER(3.5)), Phone1Word, VSPACER(3.5), card_email, NEWLINE], (5.03306*72, 2.72924*72), (LEFT, MIDDLE), (2.633336*72, 0), uniform_linescale=1)

     RightNameBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), NEWLINE, IFSET(Phone1Word, VSPACER(3.5)), Phone1Word, VSPACER(3.5), card_email, NEWLINE], (9.04194*72, 2.72924*72), (LEFT, MIDDLE), (2.633336*72, 0), uniform_linescale=1)
else:
     LeftNameBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), NEWLINE, IFSET(Phone1Word, VSPACER(3.5)), Phone1Word, VSPACER(3.5), card_email, NEWLINE], (4.33306*72, 2.72924*72), (LEFT, MIDDLE), (3.333336*72, 0), uniform_linescale=1)

     RightNameBlock = DWIMBLOCK([LEFT, F1, name_first, IF(' ', name_last), NEWLINE, IFSET(Phone1Word, VSPACER(3.5)), Phone1Word, VSPACER(3.5), card_email, NEWLINE], (8.34194*72, 2.72924*72), (LEFT, MIDDLE), (3.333336*72, 0), uniform_linescale=1)
