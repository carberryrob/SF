error = None
price = 0
pgs = 0

if qty > 1000:
     error = '<span>Error! &nbsp; The maximum quantity is 1000</span>'
elif qty < 200:
     error = '<span>Error! &nbsp; The minimum quantity for mailing is 200</span>'
else:
     pgs = int(pretty(lookup('num_originals')))
     if pgs == 12:
          set_sku('HILB_8PG_Mail')
          if 200 <= qty <= 299:
               price = num(3.63 * qty)
          elif 300 <= qty <= 499:
               price = num(2.83 * qty)
          elif 500 <= qty <= 999:
               price = num(2.16 * qty)
          elif qty == 1000:
               price = num(1.63 * qty)
          else:
               price = 0
     elif pgs == 16:
          set_sku('HILB_12PG_Mail')
          if 200 <= qty <= 299:
               price = num(3.93 * qty)
          elif 300 <= qty <= 499:
               price = num(3.13 * qty)
          elif 500 <= qty <= 999:
               price = num(2.46 * qty)
          elif qty == 1000:
               price = num(1.83 * qty)
          else:
               price = 0
     elif pgs == 20:
          set_sku('HILB_16PG_Mail')
          if 200 <= qty <= 299:
               price = num(4.13 * qty)
          elif 300 <= qty <= 499:
               price = num(3.33 * qty)
          elif 500 <= qty <= 999:
               price = num(2.66 * qty)
          elif qty == 1000:
               price = num(2.13 * qty)
          else:
               price = 0
     elif pgs == 24:
          set_sku('HILB_20PG_Mail')
          if 200 <= qty <= 299:
               price = num(4.43 * qty)
          elif 300 <= qty <= 499:
               price = num(3.63 * qty)
          elif 500 <= qty <= 999:
               price = num(2.96 * qty)
          elif qty == 1000:
               price = num(2.43 * qty)
          else:
               price = 0
     elif pgs == 28:
          set_sku('HILB_24PG_Mail')
          if 200 <= qty <= 299:
               price = num(4.73 * qty)
          elif 300 <= qty <= 499:
               price = num(3.93 * qty)
          elif 500 <= qty <= 999:
               price = num(3.26 * qty)
          elif qty == 1000:
               price = num(2.63 * qty)
          else:
               price = 0
     elif pgs == 32:
          set_sku('HILB_28PG_Mail')
          if 200 <= qty <= 299:
               price = num(5.03 * qty)
          elif 300 <= qty <= 499:
               price = num(4.18 * qty)
          elif 500 <= qty <= 999:
               price = num(3.51 * qty)
          elif qty == 1000:
               price = num(2.93 * qty)
          else:
               price = 0
     elif pgs == 36:
          set_sku('HILB_32PG_Mail')
          if 200 <= qty <= 299:
               price = num(5.33 * qty)
          elif 300 <= qty <= 499:
               price = num(4.43 * qty)
          elif 500 <= qty <= 999:
               price = num(3.76 * qty)
          elif qty == 1000:
               price = num(3.23 * qty)
          else:
               price = 0

env['calc'] = price
env['price'] = price

book = pgs - 4

detail_txt = str(qty) + ' (' + str(book) + 'pg plus cover)'

set_item_attr('detail_txt', detail_txt, override=True)
set_item_form_attr('detail_txt', detail_txt, override=True)
