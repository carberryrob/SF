error = None
try:
     sn = str(lookup('starting_number'))
     en = str(num(sn) + (qty - 1))
     sn = sn.rjust(4, '0')
     en = en.rjust(4, '0')

     env['starting_number'] = sn
     env['ticket_numbering'] = sn + ' - ' + en

     set_item_form_attr('card_number', str(sn), override=True)

     detail = []
     detail.append(qty + ' Tickets are to be numbered from ' + sn + ' - ' + en)
     detail.append('Start: ' + sn)
     detail.append('End: ' + en)

     detail_txt = '\r\n'.join(detail) + '\r\n'
     # detail_txt += 'Men (' + mtag + ') ' + mtxt + '\r\n' + 'Women (' + wtag + ') ' + wtxt
     env['ticket_numbering'] = detail_txt

     set_item_attr('detail_txt', detail_txt, override=True)
     set_item_form_attr('detail_txt', detail_txt, override=True)
     # error = detail_txt
except:
     pass
