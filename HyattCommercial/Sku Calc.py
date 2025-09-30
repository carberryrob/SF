price = 0.0
sign_price = 0.0
post_price = 0.0

if lookup('num_sides') == '_1':
    if lookup('material') == 'wood':
        set_sku('3x3_RTG_1side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
        # set_sku('SGN1821')
    elif lookup('material') == 'metal_faced':
        set_sku('3x3_ACM_1side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
    elif lookup('material') == 'coroplast':
        set_sku('3x3_Coro_1side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
elif lookup('num_sides') == '_2':
    if lookup('material') == 'wood':
        set_sku('3x3_RTG_2side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
        # set_sku('SGN1821')
    elif lookup('material') == 'metal_faced':
        set_sku('3x3_ACM_2side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
    elif lookup('material') == 'coroplast':
        set_sku('3x3_Coro_2side_2posts')
        sign_price = num(490.0)
        post_price = num(num(62.0) * num(2.0))
        price = num(sign_price + post_price)
else:
    price = num(0.0)

env['sign_price'] = sign_price
env['post_price'] = post_price
env['price'] = price
