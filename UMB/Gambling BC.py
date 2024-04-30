if card_company and not card_department:
    place = IF(CASE('upper'), 'Unofficial Center of ', card_company, CASE('None'))
elif card_department:
    place = card_department
else:
    place = ''

skinny_logos = [ 'SOL_Center-Dispute-Resolution.eps', 'FKCSOL_LRCforPHP.eps', 'umb_centerglobalengagement_bc_logo_art.eps', 'UMB_Academy_Lifelong_Learning.eps', 'UM_BioPark_Cropped.eps', 'UMB_Center-Addiction_Research-CARES.eps', 'UMB_FACULTY_Center-Teaching-Learning.eps', 'UMB_InstituteForClinical_Trans_Research.eps', 'umb_bioandbehavior_bc_logo_art.eps', 'umb_healthoutcomes_bc_logo_art.eps', 'umb_nursingworkforce_bc_logo_art.eps', 'SSW_The_Institute_Innovation.eps', 'umb_ruthyoung_bc_logo_art.eps', 'SOP_Bio- and Nano-Technology Center.eps', 'umb_pharmacysolutons_bc_logo_art.eps', 'umb_nanomedicine_bc_logo_art.eps', 'umb_drugspublicpolicy_bc_logo_art.eps', 'umb_compaideddesign_bc_logo_art.eps', 'umb_peterlamy_bc_logo_art.eps', 'umb_biomedengineering_bc_logo_art.eps', 'umb_biomoleculartherapeutics_bc_logo_art.eps', 'umb_epigenetic_bc_logo_art.eps', 'umb_healthpolicyandservices_bc_logo_art.eps', 'umb_integrativemedicine_bc_logo_art.eps', 'SOM_center vaccine development.eps', 'umb_aging_bc_logo_art.eps', 'SOM_centerforstemcellbiology_regenerativemedicine.eps', 'umb_vascularandinflammatory_bc_logo_art.eps', 'umb_gradlifesciences_bc_logo_art.eps', 'umb_genome_bc_logo_art.eps', 'umb_biologyresearch_bc_logo_art.eps', 'umb_shocktrauma_bc_logo_art.eps', 'School_Dentistry_NationalMuseum.eps' ]

# Logo was using the skinny swoop but I don't think it was needed: umb_drugsafety_bc_logo_art.eps
# These logos belong to divisions that don't use this card: 'ihv_logo.eps', 'SOM_centervaccinedevelopment-global_health-PMS.eps'

if logo_sel1 in skinny_logos:
    height = 1.03 * 72
    ArtBlock = DWIMBLOCK([
        EPSWORD('con/DD_skinnyswoop.eps', xscale=1, yscale=1)
    ], (-9, -9), (LEFT, BOTTOM), layer=-1)
else:
    height = 1.17 * 72
    ArtBlock = DWIMBLOCK([
        EPSWORD('con/BCStandardSwoosh1UP.eps', xscale=1, yscale=1)
    ], (-9, -9), (LEFT, BOTTOM), layer=-1)

para = 8.5

LogoBlock = DWIMBLOCK([
    EPSWORD('con/'+logo_sel1, resize=(158.38, 51.45), aspect=1)
], (13.496, 137.006), (LEFT, TOP), layer=2)

AddressBlock = DWIMBLOCK([
    RIGHT, F3, JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), NEWLINE,
    F4, card_www, NEWLINE
], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

ContactBlock = DWIMBLOCK([
    RIGHT, F3, JOIN3(Phone1Word, ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), NEWLINE,
    F4, card_email, NEWLINE
], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

NameBlock = DWIMBLOCK([
    RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
    F5, card_title1, NEWLINE,
    card_title2, NEWLINE,
    card_title3, NEWLINE,
    F2, place, NEWLINE
], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

if not name_first and not name_middle and not name_last and not name_suffix and not card_title1 and not card_title2 and not card_title3:
    NameBlock = DWIMBLOCK([RIGHT, F6, place, NEWLINE], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

if (NameBlock._get_top() > height):
    para = 7.5

    AddressBlock = DWIMBLOCK([
        RIGHT, F3, JOIN3(JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), ' | ', IF(F4, card_www)), NEWLINE
    ], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

    ContactBlock = DWIMBLOCK([
        RIGHT, F3, JOIN3(JOIN3(Phone1Word, ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), ' | ', IF(F4, card_email)), NEWLINE
    ], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

    NameBlock = DWIMBLOCK([
        RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
        F5, card_title1, NEWLINE,
        card_title2, NEWLINE,
        card_title3, NEWLINE,
        F2, place, NEWLINE
    ], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

    if (NameBlock._get_top() > height):
        para = 6.5

        AddressBlock = DWIMBLOCK([
            RIGHT, F3, JOIN3(JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), ' | ', IF(F4, card_www)), NEWLINE
        ], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

        ContactBlock = DWIMBLOCK([
            RIGHT, F3, JOIN3(JOIN3(Phone1Word, ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), ' | ', IF(F4, card_email)), NEWLINE
        ], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

        NameBlock = DWIMBLOCK([
            RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
            F5, card_title1, NEWLINE,
            card_title2, NEWLINE,
            card_title3, NEWLINE,
            F2, place, NEWLINE
        ], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

        if (NameBlock._get_top() > height):
            para = 5.5

            AddressBlock = DWIMBLOCK([
                RIGHT, F3, JOIN3(JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), ' | ', IF(F4, card_www)), NEWLINE
            ], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

            ContactBlock = DWIMBLOCK([
                RIGHT, F3, JOIN3(JOIN3(Phone1Word, ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), ' | ', IF(F4, card_email)), NEWLINE
            ], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

            NameBlock = DWIMBLOCK([
                RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
                F5, card_title1, NEWLINE,
                card_title2, NEWLINE,
                card_title3, NEWLINE,
                F2, place, NEWLINE
            ], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

            if (NameBlock._get_top() > height):
                para = 4.5

                AddressBlock = DWIMBLOCK([
                    RIGHT, F3, JOIN3(JOIN3(JOIN3(card_street1, ', ', card_street2), ', ', JOIN3(card_city, ', ', JOIN3(card_state, ' ', card_zip))), ' | ', IF(F4, card_www)), NEWLINE
                ], (238.5, 10), (RIGHT, BOTTOM), (230, 0), layer=1)

                ContactBlock = DWIMBLOCK([
                    RIGHT, F3, JOIN3(JOIN3(Phone1Word, ' | ', IF(F3, Phone2Word, SPACER(3), CASE('upper'), ph2_label, CASE('None'))), ' | ', IF(F4, card_email)), NEWLINE
                ], (238.5, AddressBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

                NameBlock = DWIMBLOCK([
                    RIGHT, F1, CASE('upper'), name_first, ' ', IF(name_middle, ' '), name_last, CASE('None'), IF(', ', name_suffix), NEWLINE,
                    F5, card_title1, NEWLINE,
                    card_title2, NEWLINE,
                    card_title3, NEWLINE,
                    F2, place, NEWLINE
                ], (238.5, ContactBlock._get_top() + para), (RIGHT, BOTTOM), (230, 0), layer=1)

# If there is no name or titles, make the Place line larger
# DWIMBLOCK([RIGHT, F6, place, NEWLINE])

if not name_middle:
  name = name_first+" "+name_last
else:
  name = name_first+" "+name_middle+" "+name_last

imprint=[name,name_suffix,card_title1,card_title2,card_title3,card_department,card_company,card_street1,card_street2,card_city,card_state,card_zip,ph1,ph2,(card_email+card_emailtag),card_www]
item_billcode1 = ",".join(imprint)
DBG("Item_billcode1: %s", item_billcode1, logo_sel1)


