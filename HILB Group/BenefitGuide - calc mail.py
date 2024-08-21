error = None
price = 0
pgs = 0

if qty > 1000:
     error = '<span>Error! &nbsp; The maximum quantity is 1000</span>'
else:
     # try:
     pgs = int(pretty(lookup('num_originals')))
     if pgs == 12:
          set_sku('SomeValue')
          if 1 <= qty <= 74:
               price = num(6.6)
          elif 75 <= qty <= 99:
               price = num(5.4)
          elif 100 <= qty <= 149:
               price = num(4.0)
          elif 150 <= qty <= 199:
               price = num(3.6)
          elif 200 <= qty <= 299:
               price = num(2.5)
          elif 300 <= qty <= 499:
               price = num(2.0)
          elif 500 <= qty <= 999:
               price = num(1.6)
          elif qty == 1000:
               price = num(1.3)
          else:
               price = 0
     elif pgs == 16:
          if 1 <= qty <= 74:
               price = num(7.3)
          elif 75 <= qty <= 99:
               price = num(6.0)
          elif 100 <= qty <= 149:
               price = num(4.3)
          elif 150 <= qty <= 199:
               price = num(3.9)
          elif 200 <= qty <= 299:
               price = num(2.8)
          elif 300 <= qty <= 499:
               price = num(2.3)
          elif 500 <= qty <= 999:
               price = num(1.9)
          elif qty == 1000:
               price = num(1.5)
          else:
               price = 0
     elif pgs == 20:
          if 1 <= qty <= 74:
               price = num(7.6)
          elif 75 <= qty <= 99:
               price = num(6.3)
          elif 100 <= qty <= 149:
               price = num(4.6)
          elif 150 <= qty <= 199:
               price = num(4.1)
          elif 200 <= qty <= 299:
               price = num(3.0)
          elif 300 <= qty <= 499:
               price = num(2.5)
          elif 500 <= qty <= 999:
               price = num(2.1)
          elif qty == 1000:
               price = num(1.8)
          else:
               price = 0
     elif pgs == 24:
          if 1 <= qty <= 74:
               price = num(8.0)
          elif 75 <= qty <= 99:
               price = num(6.6)
          elif 100 <= qty <= 149:
               price = num(4.9)
          elif 150 <= qty <= 199:
               price = num(4.4)
          elif 200 <= qty <= 299:
               price = num(3.3)
          elif 300 <= qty <= 499:
               price = num(2.8)
          elif 500 <= qty <= 999:
               price = num(2.4)
          elif qty == 1000:
               price = num(2.1)
          else:
               price = 0
     elif pgs == 28:
          if 1 <= qty <= 74:
               price = num(8.4)
          elif 75 <= qty <= 99:
               price = num(6.9)
          elif 100 <= qty <= 149:
               price = num(5.2)
          elif 150 <= qty <= 199:
               price = num(4.7)
          elif 200 <= qty <= 299:
               price = num(3.6)
          elif 300 <= qty <= 499:
               price = num(3.1)
          elif 500 <= qty <= 999:
               price = num(2.7)
          elif qty == 1000:
               price = num(2.3)
          else:
               price = 0
     elif pgs == 32:
          if 1 <= qty <= 74:
               price = num(8.75)
          elif 75 <= qty <= 99:
               price = num(7.2)
          elif 100 <= qty <= 149:
               price = num(5.5)
          elif 150 <= qty <= 199:
               price = num(5.0)
          elif 200 <= qty <= 299:
               price = num(3.9)
          elif 300 <= qty <= 499:
               price = num(3.35)
          elif 500 <= qty <= 999:
               price = num(2.95)
          elif qty == 1000:
               price = num(2.6)
          else:
               price = 0
     elif pgs == 36:
          if 1 <= qty <= 74:
               price = num(9.1)
          elif 75 <= qty <= 99:
               price = num(7.5)
          elif 100 <= qty <= 149:
               price = num(5.8)
          elif 150 <= qty <= 199:
               price = num(5.3)
          elif 200 <= qty <= 299:
               price = num(4.2)
          elif 300 <= qty <= 499:
               price = num(3.6)
          elif 500 <= qty <= 999:
               price = num(3.2)
          elif qty == 1000:
               price = num(2.9)
          else:
               price = 0

     # except:
     #      pass

env['calc'] = price
