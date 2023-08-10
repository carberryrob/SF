# Updated 8/09/2023 Rob Carberry

### Create the Top block so it can be tested for the first time for vertical size.  They will be reduced to fit later.
BW = 4.970559*72
TopBlock = DWIMBLOCK([LEFT, WRAP, F1, 'WPM Real Estate Management is committed to providing the best experience for each of our residents. We hope we have exceeded your expectations here at ', card_company, '. We would greatly appreciate your taking the time to leave us a review on Google! Simply scan the QR code below from your mobile device.', NEWLINE], (0.475*72, 2.78*72), (LEFT, TOP_BASELINE), (BW,0), layer=0)
#4.930559*72,0

height = TopBlock.height
while (height > (0.75*72)):
    F1.pointsize = F1.pointsize - 0.1
    F2.pointsize = F2.pointsize - 0.1

    TopBlock = DWIMBLOCK([LEFT, WRAP, F1, 'WPM Real Estate Management is committed to providing the best experience for each of our residents. We hope we have exceeded your expectations here at ', card_company, '. We would greatly appreciate your taking the time to leave us a review on Google! Simply scan the QR code below from your mobile device.', NEWLINE], (0.475*72, 2.78*72), (LEFT, TOP_BASELINE), (4.930559*72,0), layer=0)

    height = TopBlock.height
    if (height <= (0.732224*72)):
        ### if the blocks have reduced enbough then break, otherwise loop again to reduce again.
        break

# Re-draw the Blocks with the new font size so they all match.
TopBlock = DWIMBLOCK([LEFT, WRAP, F1, 'WPM Real Estate Management is committed to providing the best experience for each of our residents. We hope we have exceeded your expectations here at ', card_company, '. We would greatly appreciate your taking the time to leave us a review on Google! Simply scan the QR code below from your mobile device.', NEWLINE], (0.475*72, 2.78*72), (LEFT, TOP_BASELINE), (BW,0), layer=0)

BottomBlock = DWIMBLOCK([LEFT, WRAP, F1, 'Please contact us if there is anything further we can', NEWLINE,
'do to make your experience more comfortable', NEWLINE,
'and enjoyable.', NEWLINE,
VSPACER(9), F2, 'Thank you ... we appreciate your thoughts and your', NEWLINE,
'continued residency!', NEWLINE], (0.475*72, 1.95*72), (LEFT, TOP_BASELINE), layer=0)

# Font1 = str(F1.pointsize)
# Font2 = str(F2.pointsize)

# Test = DWIMBLOCK([LEFT, WRAP, F1, 'F1=', Font1, ' - ', 'F2=', Font2, NEWLINE, 'height=', str(height), NEWLINE], (0,0), (LEFT, BOTTOM), layer=0)