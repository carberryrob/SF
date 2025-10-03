price = 0.0
sign_price = 0.0
post_price = 0.0
try:
    if lookup("num_sides") == "_1":
        if lookup("material") == "wood":
            if lookup("post") == "yes":
                set_sku("3x3_RTG_1side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1821")
            sign_price = num(490.0)
        elif lookup("material") == "metal_faced":
            if lookup("post") == "yes":
                set_sku("3x3_ACM_1side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1813")
            sign_price = num(280.0)
        elif lookup("material") == "coroplast":
            if lookup("post") == "yes":
                set_sku("3x3_Coro_1side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1805")
            sign_price = num(177.0)
    elif lookup("num_sides") == "_2":
        if lookup("material") == "wood":
            if lookup("post") == "yes":
                set_sku("3x3_RTG_2side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1822")
            sign_price = num(504.0)
        elif lookup("material") == "metal_faced":
            if lookup("post") == "yes":
                set_sku("3x3_ACM_2side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1814")
            sign_price = num(298.0)
        elif lookup("material") == "coroplast":
            if lookup("post") == "yes":
                set_sku("3x3_Coro_2side_2posts")
                post_price = num(num(62.0) * num(2.0))
            else:
                set_sku("SGN1806")
            sign_price = num(190.0)
    elif lookup("num_sides") == "v_sign":
        if lookup("material") == "wood":
            if lookup("post") == "yes":
                set_sku("3x3_RTG_vsign_3posts")
                post_price = num(num(62.0) * num(3.0))
            else:
                set_sku("SGN1822")
            sign_price = num(504.0)
        elif lookup("material") == "metal_faced":
            if lookup("post") == "yes":
                set_sku("3x3_ACM_vsign_3posts")
                post_price = num(num(62.0) * num(3.0))
            else:
                set_sku("SGN1814")
            sign_price = num(298.0)
        elif lookup("material") == "coroplast":
            if lookup("post") == "yes":
                set_sku("3x3_Coro_vsign_3posts")
                post_price = num(num(62.0) * num(3.0))
            else:
                set_sku("SGN1806")
            sign_price = num(190.0)

    price = num(sign_price + post_price)

    env["sign_price"] = sign_price
    env["post_price"] = post_price
    env["price"] = price

    pmsg = (
        "Sign:  "
        + str("${:,.2f}".format(sign_price))
        + "<br>Post:  "
        + str("${:,.2f}".format(post_price))
        + "<br>Price:  "
        + str("${:,.2f}".format(price))
    )

    set_message(pmsg)
except:
    print("-------------------------------------------Sku Error")
