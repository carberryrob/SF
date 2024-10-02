error = None
price = 0
cost = 0
pgs = 0
postage = float(1.04)

if qty > 1000:
     error = '<span>Error!   The maximum quantity is 1000</span>'
elif qty < 200:
     error = '<span>Error!   The minimum quantity for mailing is 200</span>'
else:
     pgs = int(pretty(lookup('num_originals')))
     if pgs == 12:
          set_sku('HILB_8PG_Mail')
          weight = 0.125
          if 200 <= qty <= 299:
               price = float(3.63 * qty)
          elif 300 <= qty <= 499:
               price = float(2.83 * qty)
          elif 500 <= qty <= 999:
               price = float(2.16 * qty)
          elif qty == 1000:
               price = float(1.63 * qty)
          else:
               price = 0
     elif pgs == 16:
          set_sku('HILB_12PG_Mail')
          weight = 0.155
          if 200 <= qty <= 299:
               price = float(3.93 * qty)
          elif 300 <= qty <= 499:
               price = float(3.13 * qty)
          elif 500 <= qty <= 999:
               price = float(2.46 * qty)
          elif qty == 1000:
               price = float(1.83 * qty)
          else:
               price = 0
     elif pgs == 20:
          set_sku('HILB_16PG_Mail')
          weight = 0.185
          if 200 <= qty <= 299:
               price = float(4.13 * qty)
          elif 300 <= qty <= 499:
               price = float(3.33 * qty)
          elif 500 <= qty <= 999:
               price = float(2.66 * qty)
          elif qty == 1000:
               price = float(2.13 * qty)
          else:
               price = 0
     elif pgs == 24:
          set_sku('HILB_20PG_Mail')
          weight = 0.22
          if 200 <= qty <= 299:
               price = float(4.43 * qty)
          elif 300 <= qty <= 499:
               price = float(3.63 * qty)
          elif 500 <= qty <= 999:
               price = float(2.96 * qty)
          elif qty == 1000:
               price = float(2.43 * qty)
          else:
               price = 0
     elif pgs == 28:
          set_sku('HILB_24PG_Mail')
          weight = 0.25
          if 200 <= qty <= 299:
               price = float(4.73 * qty)
          elif 300 <= qty <= 499:
               price = float(3.93 * qty)
          elif 500 <= qty <= 999:
               price = float(3.26 * qty)
          elif qty == 1000:
               price = float(2.63 * qty)
          else:
               price = 0
     elif pgs == 32:
          set_sku('HILB_28PG_Mail')
          weight = 0.285
          postage = float(1.13)
          if 200 <= qty <= 299:
               price = float(5.03 * qty)
          elif 300 <= qty <= 499:
               price = float(4.18 * qty)
          elif 500 <= qty <= 999:
               price = float(3.51 * qty)
          elif qty == 1000:
               price = float(2.93 * qty)
          else:
               price = 0
     elif pgs == 36:
          set_sku('HILB_32PG_Mail')
          weight = 0.315
          postage = float(1.17)
          if 200 <= qty <= 299:
               price = float(5.33 * qty)
          elif 300 <= qty <= 499:
               price = float(4.43 * qty)
          elif 500 <= qty <= 999:
               price = float(3.76 * qty)
          elif qty == 1000:
               price = float(3.23 * qty)
          else:
               price = 0

cost = price
order_ship_cost= float(postage * qty)
shiptxt = str(order_ship_cost)
shiptxt = shiptxt[:-1]
# shiptxt = str(order_ship_cost) + ' | ' + shiptxt + ' | ' + str(len(shiptxt) - 1) + ' | ' + str(shiptxt.index('.'))
if str(len(shiptxt) - 1) == str(shiptxt.index('.')):
     shiptxt = str(order_ship_cost) + '0'
else:
     shiptxt = str(order_ship_cost)

# price = float(price + order_ship_cost)
price = float(price)

book = pgs - 4

detail_txt = str(qty) + ' (' + str(book) + ' pg plus cover / Postage = $' + str(shiptxt) + ')'
detail_txt1 = str(book) + ' pg plus cover / Postage = $'

env['calc'] = price
env['price'] = price
# env['shiptxt'] = shiptxt
env['detail_txt1'] = detail_txt1


set_item_attr('detail_txt', detail_txt, override=True)
set_item_form_attr('detail_txt', detail_txt, override=True)
# set_item_attr('shiptxt', shiptxt, override=True)
# set_item_form_attr('shiptxt', shiptxt, override=True)

set_item_attr('detail_txt1', detail_txt1, override=True)
set_item_form_attr('detail_txt1', detail_txt1, override=True)


# detail_name = 'Benefit Guides (Mailing)'
# set_item_attr('detail_name', detail_name, override=True)
# set_item_form_attr('detail_name', detail_name, override=True)

set_item_form_attr('item_billcode1', postage, override=True)