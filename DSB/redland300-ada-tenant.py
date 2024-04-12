# Rob Carberry 4/11/2024

if (logo == ''):
     if (card_title1 != ''):
          # COND('title1')
          C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=0)
          BlockHeight = Cust1Block.height
          BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
          while (BlockHeight > (3.5*72) or BlockWidth > (7*72)):
               F1.pointsize = F1.pointsize - 1
               C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
               Cust1Block = DWIMBLOCK([C1Line], (3.875*72, 0), (CENTER, BOTTOM), (0, 0), layer=0)
               BlockHeight = Cust1Block.height
               BlockWidth = Cust1Block._get_right() - Cust1Block._get_left()
               if (BlockHeight <= (3.5*72) and BlockWidth <= (7*72)):
                    break

          linecount = 0
          for line in Cust1Block.lines:
               linecount += 1
          realfontHeight = 49.1575 # actual pixel size of F1 @ 66.25pt
          fontscale = float(realfontHeight / 66.25) # 0.663
          adjfont = float(F1.pointsize * fontscale) # 49 * 0.663 = 32.487
          linegap = float(F1.pointsize - adjfont) # space above font 49 - 32.487 = 16.513
          txtBlockHeight = float(((adjfont + linegap) * linecount) - linegap)
          pgHeight = float(7.1625*72)
          m = float((pgHeight - txtBlockHeight) / 2)
          # m = float(3.5 * 72)
          Cust1Block.move(0,m)

          # s = 'Cust1Block.height: ' + str(Cust1Block.height) + ' | top: ' + str(Cust1Block._get_top()) + ' | Bottom: ' + str(Cust1Block._get_bottom()) + ' | F1: ' + str(F1.pointsize) + ' | BlockHeight: ' + str(BlockHeight) + ' | BlockWidth: ' + str(BlockWidth) + ' | txtBlockHeight: ' + str(txtBlockHeight)
          # Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 3.5*72), layer=-2500, uniform_linescale=1)  #Not Used


