# Enable logic after blocks section

bannerW = 96*72

if sr_Upload:
    stuffTocenter = textBlock._get_left() + sponsorLogo._get_right()
    moveby = ((bannerW-stuffTocenter)/2)
    textBlock.move(moveby, 0)
    sponsorLogo.move(moveby, 0)
else:
    stuffTocenter = textBlock._get_left() + sponsorname._get_right()
    moveby = ((bannerW-stuffTocenter)/2)
    textBlock.move(moveby, 0)
    sponsorname.move(moveby, 0)

