if card_department:
    place = card_department
else:
    place = ''

skinny_logos = [ 'umb_drugsafety_bc_logo_art.eps', 'umb_pharmacysolutons_bc_logo_art.eps', 'umb_drugspublicpolicy_bc_logo_art.eps', 'umb_nanomedicine_bc_logo_art.eps', 'umb_compaideddesign_bc_logo_art.eps', 'umb_peterlamy_bc_logo_art.eps', 'umb_biomedengineering_bc_logo_art.eps', 'umb_biomoleculartherapeutics_bc_logo_art.eps', 'umb_healthpolicyandservices_bc_logo_art.eps', 'umb_integrativemedicine_bc_logo_art.eps', 'umb_aging_bc_logo_art.eps', 'SOM_centervaccinedevelopment-global_health-PMS.eps', 'umb_vascularandinflammatory_bc_logo_art.eps', 'umb_genome_bc_logo_art.eps', 'ihv_logo.eps', 'umb_biologyresearch_bc_logo_art.eps', 'umb_shocktrauma_bc_logo_art.eps', 'umb_centerglobalengagement_bc_logo_art.eps', 'UMB_Academy_Lifelong_Learning.eps', 'UMB_Center-Addiction_Research-CARES.eps', 'UM_BioPark_Cropped.eps', 'UMB_FACULTY_Center-Teaching-Learning.eps', 'UMB_InstituteForClinical_Trans_Research.eps']

if logo_sel1 in skinny_logos:
    height = 1.03 * 72
    ArtBlock = DWIMBLOCK([
        EPSWORD('con/DD_skinnyswoop.eps', xscale=1, yscale=1)
    ], (-9, -9), (LEFT, BOTTOM), layer=-1)
else:
    height = 1.17 * 72
    # height = 1.18 * 72
    ArtBlock = DWIMBLOCK([
        EPSWORD('con/BCStandardSwoosh1UP.eps', xscale=1, yscale=1)
    ], (-9, -9), (LEFT, BOTTOM), layer=-1)

LogoBlock = DWIMBLOCK([
    EPSWORD('con/'+logo_sel1, resize=(158.38, 51.45), aspect=1)
], (13.496, 137.006), (LEFT, TOP), layer=2)


para = 8.5
para = 9
AddressBlock = DWIMBLOCK([
    RIGHT, F3, JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), NEWLINE,
    F4, card_www, NEWLINE
], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

ContactBlock = DWIMBLOCK([
    RIGHT, F3, JOIN3(IFSET(Phone1Word,[Phone1Word, SPACER(3),'PHONE'],''), ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), NEWLINE,
    F4, card_email, NEWLINE
], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

NameBlock = DWIMBLOCK([
    RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
    F5, card_title1, NEWLINE,
    card_title2, NEWLINE,
    card_title3, NEWLINE,
    F2, place, NEWLINE,
    card_department2, NEWLINE
], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

if not name_first and not name_middle and not name_last and not name_suffix and not card_title1 and not card_title2 and not card_title3:
    NameBlock = DWIMBLOCK([RIGHT, F6, place, NEWLINE, card_department2, NEWLINE], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

F1max = F1.pointsize - 0.06
F2max = F2.pointsize - 0.06
F3max = F3.pointsize - 0.03
F4max = F4.pointsize - 0.03
F5max = F5.pointsize - 0.06
F6max = F6.pointsize - 0.06

x=0

while (NameBlock._get_top() > height):
    # if para > 6:
    #     para = para - 1.5
    para = 6
    x=x+1
    # F1.pointsize = F1.pointsize - 0.001
    # F2.pointsize = F2.pointsize - 0.001
    # F3.pointsize = F3.pointsize - 0.00025
    # F4.pointsize = F4.pointsize - 0.00025
    # F5.pointsize = F5.pointsize - 0.001
    # F6.pointsize = F6.pointsize - 0.001
    
    F1.pointsize = F1.pointsize - 0.06
    F2.pointsize = F2.pointsize - 0.06
    F3.pointsize = F3.pointsize - 0.03
    F4.pointsize = F4.pointsize - 0.03
    F5.pointsize = F5.pointsize - 0.06
    F6.pointsize = F6.pointsize - 0.06

    # if F1.pointsize > F1max: 
    #     F1.pointsize = F1.pointsize - 0.025
    # if F2.pointsize > F2max: 
    #     F2.pointsize = F2.pointsize - 0.025
    # if F3.pointsize > F3max: 
    #     F3.pointsize = F3.pointsize - 0.01
    # if F4.pointsize > F4max: 
    #     F4.pointsize = F4.pointsize - 0.01
    # if F5.pointsize > F5max: 
    #     F5.pointsize = F5.pointsize - 0.025
    # if F6.pointsize > F6max: 
    #     F6.pointsize = F6.pointsize - 0.025

    AddressBlock = DWIMBLOCK([
        RIGHT, F3, JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), NEWLINE,
        F4, card_www, NEWLINE
    ], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

    ContactBlock = DWIMBLOCK([
        RIGHT, F3, JOIN3(IFSET(Phone1Word,[Phone1Word, SPACER(3),'PHONE'],''), ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), NEWLINE,
        F4, card_email, NEWLINE
    ], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

    NameBlock = DWIMBLOCK([
        RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
        F5, card_title1, NEWLINE,
        card_title2, NEWLINE,
        card_title3, NEWLINE,
        F2, place, NEWLINE,
        card_department2, NEWLINE
    ], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

    if not name_first and not name_middle and not name_last and not name_suffix and not card_title1 and not card_title2 and not card_title3:
        NameBlock = DWIMBLOCK([RIGHT, F6, place, NEWLINE, card_department2, NEWLINE], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

    if (NameBlock._get_top() <= height):
        break

DBG('para=%s', para)
DBG('height=%s', height)
DBG('x=%s', x)
