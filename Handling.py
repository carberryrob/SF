
[i for i in order.items if i.is_inventory_item()]

[i for i in order.items if i.is_inventory_item() and order.form.corp_tag in ('merch', 'merch-comm')]



Any Item:
item.corp_filter == 'AAA' and item.tag in ('AAA-PRM-TENT-001', 'AAA-PRM-TBLCVR-001', 'AAA-PRM-BAN-001') $43
item.corp_filter == 'AAA' and item.tag not in ('AAA-PRM-TENT-001', 'AAA-PRM-TBLCVR-001', 'AAA-PRM-BAN-001') $8

[i for i in order.items if i.corp_filter not in ('AAA') and i.is_inventory_item()]


[i for i in order.items if i.is_inventory_item()]


[i for i in order.items if i.is_inventory_item() and item.tag in ('CRC-PRT-UMB-001', 'CRC-PRM-WINDISP-001' )]


[i for i in order.items if i.corp_filter in ('tevis') and i.is_inventory_item()]