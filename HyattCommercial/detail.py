########## Job Header Detail ###########
job = []
job.append("Sides: {} | Material: {}    ---    Address: {} | Latitude: {}  | Longitude: {} ".format(
    lookup('num_sides').replace('_',''),
    lookup('material'),
    lookup('address'),
    lookup('latitude'),
    lookup('longitude')
))
job.append("Map URL: {}".format(lookup('mapurl')))
 
job.append('')
job.append("Sign Price:  {}        Post Price:  {}        Sell Price:  {}".format(
    str("${:,.2f}".format(lookup('sign_price'))), 
    str("${:,.2f}".format(lookup('post_price'))) + ' (2 @ ' + str("${:,.2f}".format((lookup('post_price') / 2))) + ' ea)', 
    str("${:,.2f}".format(lookup('price')))
))
 
job_txt = '\r\n'.join(job) + '\r\n'
 
set_item_attr('job_txt', job_txt, override=True)
set_item_form_attr('job_txt', job_txt, override=True)
 
##########################################################
 
# Use this function to set or create an item form attribute
# Set override to True or False
# set_item_form_attr('item_billcode1', lookup('longitude'), override=True)
# set_item_form_attr('item_billcode2', lookup('latitude'), override=True)
# set_item_form_attr('item_billcode3', lookup('zoom'), override=True)
# set_item_form_attr('item_billcode4', lookup('address'), override=True)
# set_item_form_attr('item_billcode5', lookup('mapurl'), override=True) 
# set_message(detail_txt)  # Message for quote screen
 
######### Component Detail ##########
detail = []
# detail.append("Sides: {} | Material: {}".format(lookup('num_sides').replace('_',''), lookup('material')))
# detail.append("Latitude: {} | Longitude: {} | Address: {} | Map URL: {}".format(
#     lookup('latitude'), 
#     lookup('longitude'), 
#     lookup('address'), 
#     lookup('mapurl')
# ))
 
detail.append('')
detail.append("Sign Price:  {}        Post Price:  {}        Sell Price:  {}".format(
    str("${:,.2f}".format(lookup('sign_price'))), 
    str("${:,.2f}".format(lookup('post_price'))) + ' (2 @ ' + str("${:,.2f}".format((lookup('post_price') / 2))) + ' ea)', 
    str("${:,.2f}".format(lookup('price')))
))
 
detail_txt = '\r\n'.join(detail) + '\r\n'
 
set_item_attr('detail_txt', detail_txt, override=True)
set_item_form_attr('detail_txt', detail_txt, override=True)

# address = lookup('address')
# parts = address.split(', ')
# street = parts[0].strip()
# zip = parts[0].strip()
# # zip = zip.split(' ')
# # zip = zip[1].strip()
# job_name = []
# job_name.append("{} {}".format(
#      street,
#      zip
# ))

# set_item_attr('job_name', job_name, override=True)
# set_item_form_attr('job_name', job_name, override=True)
