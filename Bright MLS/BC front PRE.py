# Rob Carberry 3/27/2024
if qr_link:
     C100 = PROCESSCOLOR('C030_M020_Y019_K058', 0.30, 0.20, 0.19, 0.58)
     QRBlock = DWIMBLOCK([LEFT, QRCODE(qr_link, color=C100, size=40)], (3.013891*72, 1.590279*72), (CENTER, MIDDLE), layer=0)
