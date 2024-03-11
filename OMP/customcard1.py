#--------------------------------------------------------
# Rob Carberry - March 2024
#--------------------------------------------------------
try:
     border_width = float(border or '0')
except:
     border_width = float(0)
Black = PROCESSCOLOR('Black', 0, 0, 0, 1)

# try:
#      card_company = card_company.strip()
#      card_department = card_department.strip()
#      card_fullname = card_fullname.strip()
#      card_title1 = card_title1.strip()
#      card_street1 = card_street1.strip()
#      card_street2 = card_street2.strip()
#      card_street3 = card_street3.strip()
#      card_email = card_email.strip()
#      # ph1 = ph1.strip()
#      # ph2 = ph2.strip()
#      card_www = card_www.strip()
# except:
#      pass

# card_company = str(card_company).strip()
# card_department = str(card_department).strip()
# card_fullname = str(card_fullname).strip()
# card_title1 = str(card_title1).strip()
# card_street1 = str(card_street1).strip()
# card_street2 = str(card_street2).strip()
# card_street3 = str(card_street3).strip()
# card_email = str(card_email).strip()
# ph1 = str(ph1).strip()
# ph2 = str(ph2).strip()
# card_www = str(card_www).strip()

# COND(fx_just)

if (image):
     style1_guide = None
     try:
          if (style1_style == '1'):
               boxwidth = float(1.5*72)
               boxheight = float(1.75*72)
          elif (style1_style == '2'):
               boxwidth = float(1.0*72)
               boxheight = float(1.0*72)
          elif (style1_style == '3'):
               boxwidth = float(3.25*72)
               boxheight = float(.75*72)
          Logo = DWIMLINES([BORDER(EPSWORD(image, xscale=1.0, resize=(boxwidth-4.0, boxheight-4.0), yscale=1.0), border_width, Black)])
          # Logo = DWIMLINES([BORDER(EPSWORD(image, xscale=1.0, resize=(boxwidth, boxheight), yscale=1.0), border_width, Black)])
          LogoBlock = DWIMBLOCK([Logo], (0, 0), (LEFT,TOP), layer=0)
          h = float(LogoBlock.height)
          w = float(LogoBlock.width)
          if (image_place[:1] == 'L'):
               x0 = 'LEFT'
               leftcalc = float(9.0)
          elif (image_place[:1] == 'C'):
               x0 = 'CENTER'
               leftcalc = float((boxwidth / 2) - (w / 2) + 9.0)
          elif (image_place[:1] == 'R'):
               x0 = 'RIGHT'
               leftcalc = float(boxwidth) + 9.0 - w
          if (image_place[-1] == 'T'):
               y0 = 'TOP'
               topcalc = float(144.0 - 9.0)
          elif (image_place[-1] == 'M'):
               y0 = 'MIDDLE'
               topcalc = float((144.0 - 9) - ((boxheight - h) / 2))
          elif (image_place[-1] == 'B'):
               y0 = 'BOTTOM'
               topcalc = 144.0 - float(boxheight + 9.0 - h)
          LogoBlock.move(leftcalc,topcalc)
     except:
          pass

# COND(style1_style)
try:
     bloks = []
     ### Create all the blocks so they can be tested for the first time for horizontal and vertical size.  They will be reduced to fit later.
     ### Create Name and title block.
     left = 0
     vspc = 6
     height = 0
     width = 0
     if (float(style1_style) == 1.0):
          if (image):
               left = float(LogoBlock._get_right() + 9.0)
               width = float(252 - 9 - left)
          else:
               left = float(1.75*72)
               width = float(1.625*72)

          if (card_company or card_department):
               Block1 = DWIMBLOCK([fx, card_company, NEWLINE, card_department, NEWLINE], (0, 144), (LEFT, TOP), (width,0), layer=0)
               bloks.append(Block1)
          if (full_name or card_title1):
               Block2 = DWIMBLOCK([fx2, full_name, NEWLINE, card_title1, NEWLINE], (0, 144), (LEFT, TOP), (width,0), layer=0)
               bloks.append(Block2)
          if (card_street1 or card_street2 or ph1 or ph2 or card_email or card_www):
               Block3 = DWIMBLOCK([fx3, card_street1, NEWLINE, card_street2, NEWLINE, card_street3, NEWLINE, CHAIN(ph1, bullet2, ph2), NEWLINE, VSPACER(vspc), card_email, NEWLINE, card_www, NEWLINE], (0, 144), (LEFT, TOP), (width,0), uniform_linescale=1, layer=0)
               bloks.append(Block3)
          maxstart = 0
          for block in bloks:
               height += (block._get_top()-block._get_bottom()) + vspc
               maxstart = max(maxstart, block._get_top())
          block = None
          height -= vspc
          while (height > 126):
               bloks = []
               vspc -= 0.1
               bh = 0
               if (card_company or card_department):
                    bh = Block1._get_top()-Block1._get_bottom() - 1
                    Block1 = DWIMBLOCK([fx, card_company, NEWLINE, card_department, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), layer=0)
                    bloks.append(Block1)
               if (full_name or card_title1):
                    bh = Block2._get_top()-Block2._get_bottom() - 1
                    Block2 = DWIMBLOCK([fx2, full_name, NEWLINE, card_title1, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), layer=0)
                    bloks.append(Block2)
               if (card_street1 or card_street2 or ph1 or ph2 or card_email or card_www):
                    bh = Block3._get_top()-Block3._get_bottom() - 1
                    Block3 = DWIMBLOCK([fx3, card_street1, NEWLINE, card_street2, NEWLINE, card_street3, NEWLINE, CHAIN(ph1, bullet2, ph2), NEWLINE, VSPACER(vspc), card_email, NEWLINE, card_www, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), uniform_linescale=1, layer=0)
                    bloks.append(Block3)
               maxstart = 0
               height = 0
               for block in bloks:
                    height += (block._get_top()-block._get_bottom()) + vspc
                    maxstart = max(maxstart, block._get_top())
               block = None
               height -= vspc
               if (height <= 126):
                    break
          top = float((height - maxstart) / 2)
          nleft = 0.0
          newBlockw = 0.0
          for block in bloks:
               newBlockw = float(block._get_right() - block._get_left())
               if (float(block.lines[0].just) == 0.0):
                    # Center Align
                    nleft = float(left - ((newBlockw - width) / 2))
                    block.move(nleft, top)
               elif (float(block.lines[0].just) == -1.0):
                    # Right Align
                    nleft = float(left - (newBlockw - width))
                    block.move(nleft, top)
               else: 
                    # Left Align
                    block.move(left, top)
               top = -((maxstart - block._get_bottom()) + vspc)
          block = None

     elif (float(style1_style) == 2.0):
          if (image):
               left = float(LogoBlock._get_right() + 9.0)
               width = float(252 - 9 - left)
               # bottom = float(LogoBlock._get_bottom() - 18)
               bottom = float(72 - 18)
          else:
               left = float(1.25*72)
               width = float(2.125*72)
               bottom = float(72 - 18)

          if (card_company or card_department):
               Block1 = DWIMBLOCK([fx, card_company, NEWLINE, card_department, NEWLINE], (0, 144), (LEFT, TOP), (width,0), layer=0)
               bloks.append(Block1)
          if (full_name or card_title1):
               Block2 = DWIMBLOCK([fx2, full_name, NEWLINE, card_title1, NEWLINE], (0, 144), (LEFT, TOP), (width,0), layer=0)
               bloks.append(Block2)
          # if (card_street1 or card_street2 or ph1 or ph2 or card_email or card_www):
          #      Block3 = DWIMBLOCK([fx3, card_street1, NEWLINE, card_street2, NEWLINE, card_street3, NEWLINE, CHAIN(ph1, bullet2, ph2), NEWLINE, VSPACER(vspc), card_email, NEWLINE, card_www, NEWLINE], (0, 144), (LEFT, TOP), (width,0), uniform_linescale=1, layer=0)
          #      bloks.append(Block3)
          maxstart = 0
          for block in bloks:
               height += (block._get_top()-block._get_bottom()) + vspc
               maxstart = max(maxstart, block._get_top())
          block = None
          height -= vspc

          while (height > bottom):
               bloks = []
               vspc -= 0.1
               bh = 0
               if (card_company or card_department):
                    bh = Block1._get_top()-Block1._get_bottom() - 1
                    Block1 = DWIMBLOCK([fx, card_company, NEWLINE, card_department, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), layer=0)
                    bloks.append(Block1)
               if (full_name or card_title1):
                    bh = Block2._get_top()-Block2._get_bottom() - 1
                    Block2 = DWIMBLOCK([fx2, full_name, NEWLINE, card_title1, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), layer=0)
                    bloks.append(Block2)
               # if (card_street1 or card_street2 or ph1 or ph2 or card_email or card_www):
               #      bh = Block3._get_top()-Block3._get_bottom() - 1
               #      Block3 = DWIMBLOCK([fx3, card_street1, NEWLINE, card_street2, NEWLINE, card_street3, NEWLINE, CHAIN(ph1, bullet2, ph2), NEWLINE, VSPACER(vspc), card_email, NEWLINE, card_www, NEWLINE], (0, 144), (LEFT, TOP), (width,bh), uniform_linescale=1, layer=0)
               #      bloks.append(Block3)
               maxstart = 0
               height = 0
               for block in bloks:
                    height += (block._get_top()-block._get_bottom()) + vspc
                    maxstart = max(maxstart, block._get_top())
               block = None
               height -= vspc
               if (height <= bottom):
                    break
          
          top = float((((maxstart - 144) + 9) / 2) - (height / 2))
          nleft = 0.0
          newBlockw = 0.0
          for block in bloks:
               newBlockw = float(block._get_right() - block._get_left())
               if (float(block.lines[0].just) == 0.0):
                    # Center Align
                    nleft = float(left - ((newBlockw - width) / 2))
                    block.move(nleft, top)
               elif (float(block.lines[0].just) == -1.0):
                    # Right Align
                    nleft = float(left - (newBlockw - width))
                    block.move(nleft, top)
               else: 
                    # Left Align
                    block.move(left, top)
               top = -((maxstart - block._get_bottom()) + vspc)
          block = None
          # COND(str(bottom) + ' - ' + str(-top) + ' - ' + str(min(bottom, -(top))))
          top = min(bottom, -(top))
          if (card_street1 or card_street2 or ph1 or ph2 or card_email or card_www):
               Block3 = DWIMBLOCK([fx3, CHAIN(card_street1, bullet2, card_street2, bullet2, card_street3), NEWLINE, CHAIN(ph1, bullet2, ph2), NEWLINE, card_email, NEWLINE, card_www, NEWLINE], (9, 11), (LEFT, BOTTOM), (3.25*72,top-7), uniform_linescale=1, layer=0)
               # bloks.append(Block3)

          newBlockw = float(Block3._get_right() - Block3._get_left())
          width = float(3.25*72)
          if (float(Block3.lines[0].just) == 0.0):
               # Center Align
               nleft = float((width - newBlockw) / 2)
               Block3.move(nleft, 0)
          elif (float(Block3.lines[0].just) == -1.0):
               # Right Align
               nleft = float(width - newBlockw)
               Block3.move(nleft, 0)



     elif (float(style1_style) == 3.0):
          if (card_company or card_department):
               Block1 = DWIMBLOCK([fx, card_company, NEWLINE, card_department, NEWLINE], (0, 144), (LEFT, TOP), (0,0), layer=0)
               bloks.append(Block1)     
except:
     pass
# xblock = DWIMBLOCK([LEFT, F1, str(left/72), ' - ', str(width/72), ' - ', str(height/72), ' - ', str(top/72), ' - ', str(vspc), NEWLINE], (0, 0), (LEFT, BOTTOM), (3.25*72,0), uniform_linescale=1, layer=0)
