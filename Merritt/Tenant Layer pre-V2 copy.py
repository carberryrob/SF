# Enable logic before blocks section

if (logo == ''):
     # COND(card_title1 != '' and card_title2 != '')
     if (card_title1 != '' and card_title2 != ''):
          C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C2Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust1Block = DWIMBLOCK([CENTER, F1, C1Line], (4.625*72, 11.75*72), (CENTER, TOP), (7*72, 4*72), layer=-1500)
          LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.625*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, MIDDLE), layer=-1500)
          Cust2Block = DWIMBLOCK([CENTER, F1, C2Line], (4.625*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 4*72), layer=-1500)

          # calculate the smallest scale factor applied to any line.
          minscale = 1

          for block in (Cust1Block, Cust2Block):
               for line in block.lines:
                    scale = line.get_scale_amount()
                    if scale:
                         minscale = min(minscale, scale)
          block = None
          
          # Set new font Size
          F3 = F1.clone()
          F3.pointsize = F1.pointsize * minscale
          F4 = F2.clone()
          F4.pointsize = F2.pointsize * minscale
          
          C1Line = LINES(card_title1, font=F3, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C2Line = LINES(card_title2, font=F3, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C3Line = LINES(card_title1, font=F4, align=CENTER, newline=NEWLINE, wrap_lf=1)
          C4Line = LINES(card_title2, font=F4, align=CENTER, newline=NEWLINE, wrap_lf=1)
          
          # LineLayerSpot1.pdf
          Cust1Block = DWIMBLOCK([C1Line], (4.625*72, 11.75*72), (CENTER, TOP), (7*72, 4*72), layer=-1500)
          LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.625*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=-1500)
          Cust2Block = DWIMBLOCK([C2Line], (4.625*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 4*72), layer=-1500)

          Cust3Block = DWIMBLOCK([C3Line], (4.625*72, 11.75*72), (CENTER, TOP), (7*72, 4*72), layer=0)
          Line2Block = DWIMBLOCK([EPSWORD('./con/LineLayerSpot1.pdf', xscale=1, yscale=1)], (4.625*72, Cust3Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=0)
          Cust4Block = DWIMBLOCK([C4Line], (4.625*72, Line2Block._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 4*72), layer=0)          
          
          length = Cust1Block._get_top() - Cust2Block._get_bottom()
          halflen = length/2
          anchor = (404+(3.91/2)) + halflen
                    
          Cust1Block = DWIMBLOCK([C1Line], (4.625*72, anchor), (CENTER, TOP), (7*72, 4*72), layer=-1500)
          LineBlock = DWIMBLOCK([EPSWORD('./con/LineLayerlineonlythiccer7.pdf', xscale=1, yscale=1)], (4.625*72, Cust1Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=-1500)
          Cust2Block = DWIMBLOCK([C2Line], (4.625*72, LineBlock._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 4*72), layer=-1500)

          Cust3Block = DWIMBLOCK([C3Line], (4.625*72, anchor), (CENTER, TOP), (7*72, 4*72), layer=0)
          Line2Block = DWIMBLOCK([EPSWORD('./con/LineLayerSpot1.pdf', xscale=1, yscale=1)], (4.625*72, Cust3Block._get_bottom() - (.5*72)), (CENTER, TOP), layer=0)
          Cust4Block = DWIMBLOCK([C4Line], (4.625*72, Line2Block._get_bottom() - (.5*72) + (3.91/2)), (CENTER, TOP), (7*72, 4*72), layer=0)

     elif (card_title1 != ''):
          # COND('title1')
          C1Line = LINES(card_title1, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust1Block = DWIMBLOCK([C1Line], (4.625*72, 0), (CENTER, BOTTOM), (7*72, 9*72), uniform_linescale=1, layer=-1500)
          C3Line = LINES(card_title1, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust3Block = DWIMBLOCK([C3Line], (4.625*72, 0), (CENTER, BOTTOM), (7*72, 9*72), uniform_linescale=1, layer=0)
          minscale = 1
          linecount = 0
          for line in Cust1Block.lines:
               linecount += 1
               scale = line.get_scale_amount()
               if scale:
                    minscale = min(minscale, scale)
          block = None
          realfontHeight = 48.399 # actual pixel size of F1 @ 73pt
          linegap = F1.pointsize - realfontHeight # space above font
          if (Cust1Block.height >= 647):
               realfontHeight = realfontHeight * minscale
               bh = F1.pointsize * linecount
               minscale = Cust1Block.height / bh
               adjfont = realfontHeight * minscale
               adjlinegap = (F1.pointsize * minscale) - adjfont
          else:
               adjfont = realfontHeight * minscale
               adjlinegap = F1.pointsize - adjfont
          txtBlockHeight = float(((adjfont + adjlinegap) * linecount) - adjlinegap)
          pgHeight = float(11.75*72)
          m = (pgHeight - txtBlockHeight) / 2
          Cust1Block.move(0,m)
          Cust3Block.move(0,m)
          # s = 'minscale: ' + str(minscale) + ' | Cust1Block.height: ' + str(Cust1Block.height) + ' | top: ' + str(Cust1Block._get_top()) + ' | Bottom: ' + str(Cust1Block._get_bottom()) + ' | adjfont: ' + str(adjfont) + ' | adjlinegap: ' + str(adjlinegap) + ' | txtBlockHeight: ' + str(txtBlockHeight) + ' | m: ' + str(m)
          # Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 3.5*72), layer=0, uniform_linescale=1)  #Not Used

     elif (card_title2 != ''):
          # COND('title2')
          C2Line = LINES(card_title2, font=F1, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust2Block = DWIMBLOCK([C2Line], (4.625*72, 0), (CENTER, BOTTOM), (7*72, 9*72), uniform_linescale=1, layer=-1500)
          C4Line = LINES(card_title2, font=F2, align=CENTER, newline=NEWLINE, wrap_lf=1)
          Cust4Block = DWIMBLOCK([C4Line], (4.625*72, 0), (CENTER, BOTTOM), (7*72, 9*72), uniform_linescale=1, layer=0)
          minscale = 1
          linecount = 0
          for line in Cust2Block.lines:
               linecount += 1
               scale = line.get_scale_amount()
               if scale:
                    minscale = min(minscale, scale)
          block = None
          realfontHeight = 48.399 # actual pixel size of F1 @ 73pt
          linegap = F1.pointsize - realfontHeight # space above font
          if (Cust2Block.height >= 647):
               realfontHeight = realfontHeight * minscale
               bh = F1.pointsize * linecount
               minscale = Cust2Block.height / bh
               adjfont = realfontHeight * minscale
               adjlinegap = (F1.pointsize * minscale) - adjfont
          else:
               adjfont = realfontHeight * minscale
               adjlinegap = F1.pointsize - adjfont
          txtBlockHeight = float(((adjfont + adjlinegap) * linecount) - adjlinegap) 
          if (txtBlockHeight >= ((9*72) - adjlinegap)):
               txtBlockHeight = ((9*72) - adjlinegap)
          pgHeight = float(11.75*72)
          m = (pgHeight - txtBlockHeight) / 2
          Cust2Block.move(0,m)
          Cust4Block.move(0,m)
          # s = 'minscale: ' + str(minscale) + ' | Cust1Block.height: ' + str(Cust1Block.height) + ' | top: ' + str(Cust1Block._get_top()) + ' | Bottom: ' + str(Cust1Block._get_bottom()) + ' | adjfont: ' + str(adjfont) + ' | adjlinegap: ' + str(adjlinegap) + ' | txtBlockHeight: ' + str(txtBlockHeight) + ' | m: ' + str(m)
          # Block5 = DWIMBLOCK([F1, LINEWRAP, str(s)], (0, 0), (LEFT, BOTTOM), (8.5*72, 3.5*72), layer=0, uniform_linescale=1)  #Not Used
