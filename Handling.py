
[i for i in order.items if i.is_inventory_item()]

[i for i in order.items if i.is_inventory_item() and order.form.corp_tag in ('merch', 'merch-comm')]