error = None
price = 0
pgs = 0

if qty > 1000:
     error = '<span>Error! &nbsp; The maximum quantity is 1000</span>'
else:
     pgs = int(pretty(lookup('num_originals')))
     if pgs == 12:
          set_sku('P_8+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.125 * qty)
          if qty < 50:
               price = num(330.0)
          elif 50 <= qty <= 74:
               price = num(6.6 * qty)
          elif 75 <= qty <= 99:
               price = num(5.4 * qty)
          elif 100 <= qty <= 149:
               price = num(4.0 * qty)
          elif 150 <= qty <= 199:
               price = num(3.6 * qty)
          elif 200 <= qty <= 299:
               price = num(2.5 * qty)
          elif 300 <= qty <= 499:
               price = num(2.0 * qty)
          elif 500 <= qty <= 999:
               price = num(1.6 * qty)
          elif qty == 1000:
               price = num(1.3 * qty)
          else:
               price = 0
     elif pgs == 16:
          set_sku('P_12+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.155 * qty)
          if qty < 50:
               price = num(365.0)
          elif 50 <= qty <= 74:
               price = num(7.3 * qty)
          elif 75 <= qty <= 99:
               price = num(6.0 * qty)
          elif 100 <= qty <= 149:
               price = num(4.3 * qty)
          elif 150 <= qty <= 199:
               price = num(3.9 * qty)
          elif 200 <= qty <= 299:
               price = num(2.8 * qty)
          elif 300 <= qty <= 499:
               price = num(2.3 * qty)
          elif 500 <= qty <= 999:
               price = num(1.9 * qty)
          elif qty == 1000:
               price = num(1.5 * qty)
          else:
               price = 0
     elif pgs == 20:
          set_sku('P_16+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.185 * qty)
          if qty < 50:
               price = num(380.0)
          elif 50 <= qty <= 74:
               price = num(7.6 * qty)
          elif 75 <= qty <= 99:
               price = num(6.3 * qty)
          elif 100 <= qty <= 149:
               price = num(4.6 * qty)
          elif 150 <= qty <= 199:
               price = num(4.1 * qty)
          elif 200 <= qty <= 299:
               price = num(3.0 * qty)
          elif 300 <= qty <= 499:
               price = num(2.5 * qty)
          elif 500 <= qty <= 999:
               price = num(2.1 * qty)
          elif qty == 1000:
               price = num(1.8 * qty)
          else:
               price = 0
     elif pgs == 24:
          set_sku('P_20+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.22 * qty)
          if qty < 50:
               price = num(400.0)
          elif 50 <= qty <= 74:
               price = num(8.0 * qty)
          elif 75 <= qty <= 99:
               price = num(6.6 * qty)
          elif 100 <= qty <= 149:
               price = num(4.9 * qty)
          elif 150 <= qty <= 199:
               price = num(4.4 * qty)
          elif 200 <= qty <= 299:
               price = num(3.3 * qty)
          elif 300 <= qty <= 499:
               price = num(2.8 * qty)
          elif 500 <= qty <= 999:
               price = num(2.4 * qty)
          elif qty == 1000:
               price = num(2.1 * qty)
          else:
               price = 0
     elif pgs == 28:
          set_sku('P_24+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.25 * qty)
          if qty < 50:
               price = num(420.0)
          elif 50 <= qty <= 74:
               price = num(8.4 * qty)
          elif 75 <= qty <= 99:
               price = num(6.9 * qty)
          elif 100 <= qty <= 149:
               price = num(5.2 * qty)
          elif 150 <= qty <= 199:
               price = num(4.7 * qty)
          elif 200 <= qty <= 299:
               price = num(3.6 * qty)
          elif 300 <= qty <= 499:
               price = num(3.1 * qty)
          elif 500 <= qty <= 999:
               price = num(2.7 * qty)
          elif qty == 1000:
               price = num(2.3 * qty)
          else:
               price = 0
     elif pgs == 32:
          set_sku('P_28+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.285 * qty)
          if qty < 50:
               price = num(437.5)
          elif 50 <= qty <= 74:
               price = num(8.75 * qty)
          elif 75 <= qty <= 99:
               price = num(7.2 * qty)
          elif 100 <= qty <= 149:
               price = num(5.5 * qty)
          elif 150 <= qty <= 199:
               price = num(5.0 * qty)
          elif 200 <= qty <= 299:
               price = num(3.9 * qty)
          elif 300 <= qty <= 499:
               price = num(3.35 * qty)
          elif 500 <= qty <= 999:
               price = num(2.95 * qty)
          elif qty == 1000:
               price = num(2.6 * qty)
          else:
               price = 0
     elif pgs == 36:
          set_sku('P_32+Cvr_BKLT_80_Silk_4.4')
          weight = num(0.315 * qty)
          if qty < 50:
               price = num(455.0)
          elif 50 <= qty <= 74:
               price = num(9.1 * qty)
          elif 75 <= qty <= 99:
               price = num(7.5 * qty)
          elif 100 <= qty <= 149:
               price = num(5.8 * qty)
          elif 150 <= qty <= 199:
               price = num(5.3 * qty)
          elif 200 <= qty <= 299:
               price = num(4.2 * qty)
          elif 300 <= qty <= 499:
               price = num(3.6 * qty)
          elif 500 <= qty <= 999:
               price = num(3.2 * qty)
          elif qty == 1000:
               price = num(2.9 * qty)
          else:
               price = 0

cost = price
env['calc'] = price
env['price'] = price

book = pgs - 4

detail_txt = str(qty) + ' (' + str(book) + ' pg plus cover)'

set_item_attr('detail_txt', detail_txt, override=True)
set_item_form_attr('detail_txt', detail_txt, override=True)
