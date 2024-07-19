# Enable logic before blocks section
if (Location == '-None' or Location == ''):
        COND('A Location is required!')
else:
     IndividualLines = None
     CouplesLines = None
     FamilyLines = None
     if (IndMonthly or IndAnnually or IndSave):
          IndividualLines = DWIMLINES([CENTER, F7, 'Individual Membership', NEWLINE,
          VSPACER(4.5), F1, IFSET(IndMonthly, ['$', IndMonthly, ' / Monthly', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          IFSET(IndAnnually, [VSPACER(4.5), '$', IndAnnually, ' / Annually', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          VSPACER(4.5), F2, IF('Save $', IndSave, ' /year when paid annually'), NEWLINE, F1, VSPACER(12), " ", NEWLINE],[], (3.8*72,0))

     if (CoupMonthly or CoupAnnually or CoupSave):
          CouplesLines = DWIMLINES([CENTER, F7, 'Couples Membership', NEWLINE,
          VSPACER(4.5), F1, IFSET(CoupMonthly, ['$', CoupMonthly, ' / Monthly', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          IFSET(CoupAnnually, [VSPACER(4.5), '$', CoupAnnually, ' / Annually', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          VSPACER(4.5), F2, IF('Save $', CoupSave, ' /year when paid annually'), NEWLINE, F1, VSPACER(12), " ", NEWLINE],[], (3.8*72,0))

     if (FamMonthly or FamAnnually or FamSave):
          FamilyLines = DWIMLINES([CENTER, F1, F7, 'Family Membership', NEWLINE,
          VSPACER(4.5), F1, IFSET(FamMonthly, ['$', FamMonthly, ' / Monthly', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          IFSET(FamAnnually, [VSPACER(4.5), '$', FamAnnually, ' / Annually', IF(' + ', RecTax, '% Tax')]), NEWLINE,
          VSPACER(4.5), F2, IF('Save $', FamSave, ' /year when paid annually'), NEWLINE, F1, VSPACER(12), " ", NEWLINE],[], (3.8*72,0))

     MainBlock = DWIMBLOCK([IndividualLines, CouplesLines, FamilyLines], (6.425*72, 5*72), (CENTER, TOP_BASELINE), (3.8*72,0*72), layer=0)
