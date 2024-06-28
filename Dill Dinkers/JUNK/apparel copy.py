#--------------------------------------------------------
# Get the number of num_shirts of each size
#--------------------------------------------------------
xsmall = num(lookup('xsmall'))
small = num(lookup('small'))
medium = num(lookup('medium'))
large = num(lookup('large'))
xlarge = num(lookup('xlarge'))
_2xl = num(lookup('_2xl'))
_3xl = num(lookup('_3xl'))
_4xl = num(lookup('_4xl'))

num_shirts = xsmall+small+medium+large+xlarge+_2xl+_3xl+_4xl

#--------------------------------------------------------
# return an error if the order is less than 12 shirt
#--------------------------------------------------------
error = ''
if num_shirts < 12:
  error = '<span class="orderr">The total combined quantity must be a minimum of 12 shirts<span>'


#--------------------------------------------------------
# Set price per shirt based on size of shirts ordered
#--------------------------------------------------------
std_price = num(48.00)
xsmall_pricing = xsmall * std_price
small_pricing = small * std_price
medium_pricing = medium * std_price
large_pricing = large * std_price
xlarge_pricing = xlarge * std_price
xxlarge_pricing = _2xl * std_price
xxxlarge_pricing = _3xl * std_price
xxxxlarge_pricing = _4xl * std_price

price = xsmall_pricing + small_pricing + medium_pricing + large_pricing + xlarge_pricing + xxlarge_pricing + xxxlarge_pricing + xxxxlarge_pricing

env['master_calculation'] = num_shirts
env['qty'] = num_shirts

#--------------------------------------------------------
# Update the item qty
#--------------------------------------------------------
set_item_attr('qty', num_shirts, override=True)
 
# Use this function to set or create an item form attribute
set_item_form_attr('qty', num_shirts, override=True)

#--------------------------------------------------------
# Set the Size Text & Detail Text
#--------------------------------------------------------
detail = []
detail.append('This is a details test line 1')
detail.append('This is another line test line 2')

tag = 'K587'
qtxt = tag + ' - Qty: ' + str(num_shirts) + ' / Sizes: '
sz = []
if xsmall > 0:
	sz.append('XS: ' + str(xsmall))
if small > 0:
	sz.append('S: ' + str(small))
if medium > 0:
	sz.append('M: ' + str(medium))
if large > 0:
	sz.append('L: ' + str(large))
if xlarge > 0:
	sz.append('XL: ' + str(xlarge))
if _2xl > 0:
	sz.append('2XL: ' + str(_2xl))
if _3xl > 0:
	sz.append('3XL: ' + str(_3xl))
if _4xl > 0:
	sz.append('4XL: ' + str(_4xl))

sz_txt = ', '.join(sz)
qtxt += str(sz_txt)

detail_txt = '\r\n'.join(detail) + '\r\n'
detail_txt += qtxt

set_item_form_attr('qtys_txt', qtxt, override=True)
set_item_form_attr('detail_txt', detail_txt, override=True)
