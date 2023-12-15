# Enable logic before blocks section
# calculate vCard info. For this instance:
# (if using international phones, change '+ph11+ph12+ph13+' to '+ph1+')

if (include_qr == 'Yes'):
    def vcard_line(left, right, joinwith=':'):
        charset=''
        if isinstance(right, unicode):
            right = right.encode('UTF8')
            charset=';CHARSET=utf-8'
        return '%s%s%s%s\n' % (left, charset, joinwith, right)
    vcard = 'BEGIN:VCARD\n'
    vcard += 'VERSION:4.0\n'
    vcard += vcard_line('N', name_last+';'+name_first)
    # vcard += vcard_line('FN', name_first+' '+name_last)
    # vcard += vcard_line('TITLE', card_title1)
    vcard += vcard_line('ORG', 'MOI')
    vcard += vcard_line('TEL;Phone', ph11 +ph12 +ph13)
    vcard += vcard_line('EMAIL', card_email)	
    vcard += 'END:VCARD'
    QRBlock = DWIMBLOCK([CENTER, QRCODE(vcard, 40)], (29, 0), (CENTER, MIDDLE))


# Enable logic after blocks section
if (include_qr == 'Yes'):
    QRBlock.move(0, (Block2._get_top()+29))
