#--------------------------------------------------------
# Get the number of num_shirts of each size
#--------------------------------------------------------
error = None

mens_fields = {}
mens_fields['Men\'s Xsmall'] = lookup('mens_xsmall')
mens_fields['Men\'s Small'] = lookup('mens_small')
mens_fields['Men\'s Medium'] = lookup('mens_medium')
mens_fields['Men\'s Large'] = lookup('mens_large')
mens_fields['Men\'s Xlarge'] = lookup('mens_xlarge')
mens_fields['Men\'s 2XL'] = lookup('mens_2xl')
mens_fields['Men\'s 3XL'] = lookup('mens_3xl')
mens_fields['Men\'s 4XL'] = lookup('mens_4xl')

womens_fields = {}
womens_fields['Women\'s Xsmall'] = lookup('womens_xsmall')
womens_fields['Women\'s Small'] = lookup('womens_small')
womens_fields['Women\'s Medium'] = lookup('womens_medium')
womens_fields['Women\'s Large'] = lookup('womens_large')
womens_fields['Women\'s Xlarge'] = lookup('womens_xlarge')
womens_fields['Women\'s 2XL'] = lookup('womens_2xl')
womens_fields['Women\'s 3XL'] = lookup('womens_3xl')
womens_fields['Women\'s 4XL'] = lookup('womens_4xl')

fields = {}
fields.update(mens_fields)
fields.update(womens_fields)

num_shirts = 0
mw = 0

for key, value in fields.items():
	if len(value) <=0:
		error = '<span class="orderr">' + key + ' must be a number!<span>'
	else:
		mw += num(value)


# mens_xsmall = num(lookup('mens_xsmall'))
# mens_small = num(lookup('mens_small'))
# mens_medium = num(lookup('mens_medium'))
# mens_large = num(lookup('mens_large'))
# mens_xlarge = num(lookup('mens_xlarge'))
# mens_2xl = num(lookup('mens_2xl'))
# mens_3xl = num(lookup('mens_3xl'))
# mens_4xl = num(lookup('mens_4xl'))

# womens_xsmall = num(lookup('womens_xsmall'))
# womens_small = num(lookup('womens_small'))
# womens_medium = num(lookup('womens_medium'))
# womens_large = num(lookup('womens_large'))
# womens_xlarge = num(lookup('womens_xlarge'))
# womens_2xl = num(lookup('womens_2xl'))
# womens_3xl = num(lookup('womens_3xl'))
# womens_4xl = num(lookup('womens_4xl'))

# mens_num_shirts = mens_xsmall+mens_small+mens_medium+mens_large+mens_xlarge+mens_2xl+mens_3xl+mens_4xl

# womens_num_shirts = womens_xsmall+womens_small+womens_medium+womens_large+womens_xlarge+womens_2xl+womens_3xl+womens_4xl

# mw = mens_num_shirts+womens_num_shirts
if mw > 0:
	num_shirts = mw
else:
	num_shirts = num(0)

env['master_calculation'] = num_shirts
env['&total_quantity'] = num_shirts
env['qty'] = num_shirts

#--------------------------------------------------------
# Update the item qty
#--------------------------------------------------------
set_item_attr('qty', num_shirts, override=True)
 
# Use this function to set or create an item form attribute
set_item_form_attr('qty', num_shirts, override=True)

#--------------------------------------------------------
# return an error if the order is less than 12 shirt
#--------------------------------------------------------
# error = None
if num_shirts < 12:
	error = '<span class="orderr">The total combined quantity must be a minimum of 12 shirts<span>'


#--------------------------------------------------------
# Set price per shirt based on size of shirts ordered
#--------------------------------------------------------
if num_shirts >= 1 and num_shirts < 36:
	std_price = num(41.74) 
elif num_shirts >= 36 and num_shirts < 72:  
	std_price = num(35.90) 
elif num_shirts >= 72:  
	std_price = num(33.39) 
else:
	std_price = num(0.00)

xsmall_pricing = (mens_xsmall + womens_xsmall) * std_price
small_pricing = (mens_small + womens_small) * std_price
medium_pricing = (mens_medium + womens_medium) * std_price
large_pricing = (mens_large + womens_large) * std_price
xlarge_pricing = (mens_xlarge + womens_xlarge) * std_price
xxlarge_pricing = (mens_2xl + womens_2xl) * (std_price + num(2.00))
xxxlarge_pricing = (mens_3xl + womens_3xl) * (std_price + num(3.00))
xxxxlarge_pricing = (mens_4xl + womens_4xl) * (std_price + num(4.00))

price = xsmall_pricing + small_pricing + medium_pricing + large_pricing + xlarge_pricing + xxlarge_pricing + xxxlarge_pricing + xxxxlarge_pricing

#--------------------------------------------------------
# Set the Men's Detail Text
#--------------------------------------------------------
mtag = 'K587'
mtxt = ' - Qty: ' + str(mens_num_shirts) + ' / Sizes: '
msz = []
if mens_xsmall > 0:
	msz.append('XS: ' + str(mens_xsmall))
if mens_small > 0:
	msz.append('S: ' + str(mens_small))
if mens_medium > 0:
	msz.append('M: ' + str(mens_medium))
if mens_large > 0:
	msz.append('L: ' + str(mens_large))
if mens_xlarge > 0:
	msz.append('XL: ' + str(mens_xlarge))
if mens_2xl > 0:
	msz.append('2XL: ' + str(mens_2xl))
if mens_3xl > 0:
	msz.append('3XL: ' + str(mens_3xl))
if mens_4xl > 0:
	msz.append('4XL: ' + str(mens_4xl))

msz_txt = ', '.join(msz)
mtxt += str(msz_txt)

#--------------------------------------------------------
# Set the Women's Detail Text
#--------------------------------------------------------
wtag = 'LK587'
wtxt = ' - Qty: ' + str(womens_num_shirts) + ' / Sizes: '
wsz = []
if womens_xsmall > 0:
	wsz.append('XS: ' + str(womens_xsmall))
if womens_small > 0:
	wsz.append('S: ' + str(womens_small))
if womens_medium > 0:
	wsz.append('M: ' + str(womens_medium))
if womens_large > 0:
	wsz.append('L: ' + str(womens_large))
if womens_xlarge > 0:
	wsz.append('XL: ' + str(womens_xlarge))
if womens_2xl > 0:
	wsz.append('2XL: ' + str(womens_2xl))
if womens_3xl > 0:
	wsz.append('3XL: ' + str(womens_3xl))
if womens_4xl > 0:
	wsz.append('4XL: ' + str(womens_4xl))

wsz_txt = ', '.join(wsz)
wtxt += str(wsz_txt)

#--------------------------------------------------------
# Set the Size Text & Detail Description Text
#--------------------------------------------------------
detail = []
detail.append('Below are the sizes for Mens(' + mtag + ') and Womens(' + wtag + ').')
detail.append('Please add all appropriate components to complete this on-demand order that meets the minimum of 12 shirts.')


detail_txt = '\r\n'.join(detail) + '\r\n'
detail_txt += 'Men (' + mtag + ') ' + mtxt + '\r\n' + 'Women (' + wtag + ') ' + wtxt

env['detail_txt'] = detail_txt
set_item_attr('detail_txt', detail_txt, override=True)

set_item_form_attr('detail_txt', detail_txt, override=True)
