# Enable logic before blocks section

### add locations to the list and test that the location doesn't exist twice.
addused = []
for location in (location1_1, location2_2, location3_3, location4_4):
    if location != '':
        if location not in addused:
            addused.append(location)
        else:
            COND('The location ' + location.upper() + ' is already added on the back.  Locationes can only be listed on the back once.')
location = None
