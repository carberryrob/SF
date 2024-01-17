#--------------------------------------------------------
# Get the number of num_shirts of each size
#--------------------------------------------------------
error = None

mens_fields = {}
mens_fields['Men\'s Xsmall'] = num(lookup('mens_xsmall'))
mens_fields['Men\'s Small'] = num(lookup('mens_small'))
mens_fields['Men\'s Medium'] = num(lookup('mens_medium'))
mens_fields['Men\'s Large'] = num(lookup('mens_large'))
mens_fields['Men\'s Xlarge'] = num(lookup('mens_xlarge'))
mens_fields['Men\'s 2XL'] = num(lookup('mens_2xl'))
mens_fields['Men\'s 3XL'] = num(lookup('mens_3xl'))
mens_fields['Men\'s 4XL'] = num(lookup('mens_4xl'))

womens_fields = {}
womens_fields['Women\'s Xsmall'] = num(lookup('womens_xsmall'))
womens_fields['Women\'s Small'] = num(lookup('womens_small'))
womens_fields['Women\'s Medium'] = num(lookup('womens_medium'))
womens_fields['Women\'s Large'] = num(lookup('womens_large'))
womens_fields['Women\'s Xlarge'] = num(lookup('womens_xlarge'))
womens_fields['Women\'s 2XL'] = num(lookup('womens_2xl'))
womens_fields['Women\'s 3XL'] = num(lookup('womens_3xl'))
womens_fields['Women\'s 4XL'] = num(lookup('womens_4xl'))


fields = {}  ### Combine both counts
fields.update(mens_fields)
fields.update(womens_fields)

num_shirts = 0
num_shirts = sum(fields.values())  #Get the total number of shirts

#--------------------------------------------------------
# return an error if the order is less than 12 shirt
#--------------------------------------------------------
error = None
if num_shirts < 12:
	price = 0
	env['master_calculation'] = num_shirts
	env['&total_quantity'] = num_shirts
	env['qty'] = num_shirts
	error = '<span class="orderr">The total combined quantity must be a minimum of 12 shirts<span>'
else:
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

	price = 0
	for key, value in fields.items():
		#env['&instructions'] = '|' + str(key[-3:]) + '|'
		if key[-3:] == '2XL':
			price += (value * (std_price + num(2.00)))
		elif key[-3:] == '3XL':
			price += (value * (std_price + num(3.00)))
		elif key[-3:] == '4XL':
			price += (value * (std_price + num(4.00)))

		else:
			price += value * std_price

	#--------------------------------------------------------
	# Set the Men's Detail Text
	#--------------------------------------------------------
	mtag = 'K587'
	mtxt = ' - Qty: ' + str(sum(mens_fields.values())) + ' / Sizes: '
	msz = []

	if num(mens_fields['Men\'s Xsmall']) > 0:
		msz.append('XS: ' + str(mens_fields['Men\'s Xsmall']))
	if num(mens_fields['Men\'s Small']) > 0:
		msz.append('S: ' + str(mens_fields['Men\'s Small']))
	if num(mens_fields['Men\'s Medium']) > 0:
		msz.append('M: ' + str(mens_fields['Men\'s Medium']))
	if num(mens_fields['Men\'s Large']) > 0:
		msz.append('L: ' + str(mens_fields['Men\'s Large']))
	if num(mens_fields['Men\'s Xlarge']) > 0:
		msz.append('XL: ' + str(mens_fields['Men\'s Xlarge']))
	if num(mens_fields['Men\'s 2XL']) > 0:
		msz.append('2XL: ' + str(mens_fields['Men\'s 2XL']))
	if num(mens_fields['Men\'s 3XL']) > 0:
		msz.append('3XL: ' + str(mens_fields['Men\'s 3XL']))
	if num(mens_fields['Men\'s 4XL']) > 0:
		msz.append('4XL: ' + str(mens_fields['Men\'s 4XL']))

	msz_txt = ', '.join(msz)
	mtxt += str(msz_txt)

	#--------------------------------------------------------
	# Set the Women's Detail Text
	#--------------------------------------------------------
	wtag = 'LK587'
	wtxt = ' - Qty: ' + str(sum(womens_fields.values())) + ' / Sizes: '
	wsz = []

	if num(womens_fields['Women\'s Xsmall']) > 0:
		wsz.append('XS: ' + str(womens_fields['Women\'s Xsmall']))
	if num(womens_fields['Women\'s Small']) > 0:
		wsz.append('S: ' + str(womens_fields['Women\'s Small']))
	if num(womens_fields['Women\'s Medium']) > 0:
		wsz.append('M: ' + str(womens_fields['Women\'s Medium']))
	if num(womens_fields['Women\'s Large']) > 0:
		wsz.append('L: ' + str(womens_fields['Women\'s Large']))
	if num(womens_fields['Women\'s Xlarge']) > 0:
		wsz.append('XL: ' + str(womens_fields['Women\'s Xlarge']))
	if num(womens_fields['Women\'s 2XL']) > 0:
		wsz.append('2XL: ' + str(womens_fields['Women\'s 2XL']))
	if num(womens_fields['Women\'s 3XL']) > 0:
		wsz.append('3XL: ' + str(womens_fields['Women\'s 3XL']))
	if num(womens_fields['Women\'s 4XL']) > 0:
		wsz.append('4XL: ' + str(womens_fields['Women\'s 4XL']))

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

	# env['&instructions'] = '|' + detail_txt + '|'
	# env['detail_txt'] = detail_txt
	set_item_attr('detail_txt', detail_txt, override=True)

	set_item_form_attr('detail_txt', detail_txt, override=True)
