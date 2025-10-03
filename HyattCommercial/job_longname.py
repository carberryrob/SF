try:
    address = lookup("address")
    parts = address.split(", ")
    street = parts[0].strip()
    zip = parts[2].strip()
    zip = zip.split(" ")
    zip = zip[1].strip()
    addr_name = []
    addr_name.append("{}, {}".format(street, zip))
    addr_name = "".join(addr_name)

    sku = lookup("*sku")
    sku_parts = sku.split("_")

    size = sku_parts[0]
    material = lookup("material")
    sides = sku_parts[2]
    post = sku_parts[3]

    size = size.replace("x", "'x") + "'"
    material = material.replace("_", " ").title().strip() + " (Signage)"
    post = "w/ " + post.replace("posts", "") + " Posts"

    lname = []
    lname.append("{} - {} {} {}".format(addr_name, size, material, post))
    lname = "".join(lname)

    set_item_attr("job_longname", lname, override=True)
    set_item_form_attr("job_longname", lname, override=True)

    # set_message(lname)  # Message for quote screen
except Exception:
    print("---------------------------------Error creating Longname")
