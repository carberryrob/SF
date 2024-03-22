# Rob Carberry 3/21/2024

if (logo == ''):
     # COND(card_title1 != '' and card_title2 != '')
     if (card_title1 != '' and card_title2 != ''):
 
          C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C2Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C3Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C4Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)          
          Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
          Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
          Cust3Block = DWIMBLOCK([C3Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
          Cust4Block = DWIMBLOCK([C4Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)          

          Line1Block = DWIMBLOCK([EPSWORD('./con/LineLayerBlack.pdf', xscale=1, yscale=1, resize=(6*72,3.5))], (3.875*72, 0), (CENTER, BOTTOM), layer=-1500)
          Line2Block = DWIMBLOCK([EPSWORD('./con/LineLayerSpot1.pdf', xscale=1, yscale=1, resize=(6*72,3.5))], (3.875*72, 0), (CENTER, BOTTOM), layer=-2500)

          Block1Height = Cust1Block.height
          Block1Width = Cust1Block._get_right() - Cust1Block._get_left()
          Block2Height = Cust2Block.height
          Block2Width = Cust2Block._get_right() - Cust2Block._get_left()

          while (Block1Height > (2*72) or Block1Width > (6*72) or Block2Height > (2*72) or Block2Width > (6*72)):
               F1.pointsize = F1.pointsize - 1
               F2.pointsize = F2.pointsize - 1
               C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
               C2Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
               C3Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
               C4Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)          
               Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
               Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
               Cust3Block = DWIMBLOCK([C3Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
               Cust4Block = DWIMBLOCK([C4Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)          
               Block1Height = Cust1Block.height
               Block1Width = Cust1Block._get_right() - Cust1Block._get_left()
               Block2Height = Cust2Block.height
               Block2Width = Cust2Block._get_right() - Cust2Block._get_left()
               if (Block1Height <= (2*72) and Block1Width <= (6*72) and Block2Height <= (2*72) and Block2Width <= (6*72)):
                    break

          linecount1 = 0
          for line in Cust1Block.lines:
               linecount1 += 1
          line = None
          linecount2 = 0
          for line in Cust2Block.lines:
               linecount2 += 1
          line = None

          realfontHeight = 48.399 # actual pixel size of F1 @ 73pt
          fontscale = float(realfontHeight / 73) # 0.663
          adjfont = float(F1.pointsize * fontscale) # 49 * 0.663 = 32.487
          linegap = float(F1.pointsize - adjfont) # space above font 49 - 32.487 = 16.513

          txt1BlockHeight = float(((adjfont + linegap) * linecount1) - linegap)
          txt2BlockHeight = float(((adjfont + linegap) * linecount2) - linegap)
          txtBlockHeight = float(txt1BlockHeight + txt2BlockHeight +  + 72 + Line1Block.height)

          pgHeight = float(7.75*72)

          m = float((pgHeight - txtBlockHeight) / 2)
          Cust2Block.move(0,m)
          Cust4Block.move(0,m)
          m = float(m + txt2BlockHeight + 36)
          Line1Block.move(0,m)
          Line2Block.move(0,m)
          m = float(Line1Block._get_top() + 36)
          Cust1Block.move(0,m)
          Cust3Block.move(0,m)
 

          # s = 'Cust1Block.height: ' + str(Cust1Block.height) + ' | top: ' + str(Cust1Block._get_top()) + ' | Bottom: ' + str(Cust1Block._get_bottom()) + ' | F1: ' + str(F1.pointsize) + ' | BlockHeight: ' + str(BlockHeight) + ' | BlockWidth: ' + str(BlockWidth) + ' | txtBlockHeight: ' + str(txtBlockHeight)
          # Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 3.5*72), layer=-2500, uniform_linescale=1)  #Not Used


     elif (card_title1 != ''):
          # COND('title1')
          C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C2Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
          Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
          BlockHeight = Cust1Block.height
          BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
          while (BlockHeight > (5*72) or BlockWidth > (6*72)):
               F1.pointsize = F1.pointsize - 1
               F2.pointsize = F2.pointsize - 1
               C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
               C2Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
               Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
               Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
               BlockHeight = Cust1Block.height
               BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
               if (BlockHeight <= (5*72) and BlockWidth <= (6*72)):
                    break

          linecount = 0
          for line in Cust1Block.lines:
               linecount += 1
          realfontHeight = 48.399 # actual pixel size of F1 @ 73pt
          fontscale = float(realfontHeight / 73) # 0.663
          adjfont = float(F1.pointsize * fontscale) # 49 * 0.663 = 32.487
          linegap = float(F1.pointsize - adjfont) # space above font 49 - 32.487 = 16.513
          txtBlockHeight = float(((adjfont + linegap) * linecount) - linegap)
          pgHeight = float(7.75*72)
          m = float((pgHeight - txtBlockHeight) / 2)
          Cust1Block.move(0,m)
          Cust2Block.move(0,m)

     elif (card_title2 != ''):
          # COND('title2')
          C1Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C2Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
          Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
          BlockHeight = Cust1Block.height
          BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
          while (BlockHeight > (5*72) or BlockWidth > (6*72)):
               F1.pointsize = F1.pointsize - 1
               F2.pointsize = F2.pointsize - 1
               C1Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
               C2Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
               Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-1500)
               Cust2Block = DWIMBLOCK([C2Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=-2500)
               BlockHeight = Cust1Block.height
               BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
               if (BlockHeight <= (5*72) and BlockWidth <= (6*72)):
                    break

          linecount = 0
          for line in Cust1Block.lines:
               linecount += 1
          realfontHeight = 48.399 # actual pixel size of F1 @ 73pt
          fontscale = float(realfontHeight / 73) # 0.663
          adjfont = float(F1.pointsize * fontscale) # 49 * 0.663 = 32.487
          linegap = float(F1.pointsize - adjfont) # space above font 49 - 32.487 = 16.513
          txtBlockHeight = float(((adjfont + linegap) * linecount) - linegap)
          pgHeight = float(7.75*72)
          m = float((pgHeight - txtBlockHeight) / 2)
          Cust1Block.move(0,m)
          Cust2Block.move(0,m)

          # s = 'Cust1Block.height: ' + str(Cust1Block.height) + ' | top: ' + str(Cust1Block._get_top()) + ' | Bottom: ' + str(Cust1Block._get_bottom()) + ' | F1: ' + str(F1.pointsize) + ' | BlockHeight: ' + str(BlockHeight) + ' | BlockWidth: ' + str(BlockWidth) + ' | txtBlockHeight: ' + str(txtBlockHeight)
          # Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 3.5*72), layer=-2500, uniform_linescale=1)  #Not Used


