# Enable logic before blocks section
if (Location == '-None' or Location == ''):
    COND('A Location is required!')
else:
    ### Create 2 list to compare later for Day of week and Time of Day
    dayofweek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    timeofday = ['1:00 a.m.', '1:30 a.m.', '2:00 a.m.', '2:30 a.m.', '3:00 a.m.', '3:30 a.m.', '4:00 a.m.', '4:30 a.m.', '5:00 a.m.', '5:30 a.m.', '6:00 a.m.', '6:30 a.m.', '7:00 a.m.', '7:30 a.m.', '8:00 a.m.', '8:30 a.m.', '9:00 a.m.', '9:30 a.m.', '10:00 a.m.', '10:30 a.m.', '11:00 a.m.', '11:30 a.m.', '12:00 a.m.', '12:30 a.m.', '1:00 p.m.', '1:30 p.m.', '2:00 p.m.', '2:30 p.m.', '3:00 p.m.', '3:30 p.m.', '4:00 p.m.', '4:30 p.m.', '5:00 p.m.', '5:30 p.m.', '6:00 p.m.', '6:30 p.m.', '7:00 p.m.', '7:30 p.m.', '8:00 p.m.', '8:30 p.m.', '9:00 p.m.', '9:30 p.m.', '10:00 p.m.', '10:30 p.m.', '11:00 p.m.', '11:30 p.m.', '12:00 p.m.', '12:30 p.m.']

    #--------------------------------------------------
    ### Make sure Start_Day and End_Day is not the same
    daysused = []
    for day in (start_day, end_day):
        if day not in daysused:
            daysused.append(day)
        else:
            COND(day.upper() + ' is already selected. The days of the week need to be different')
    daysused = None

    ### Make sure End_Day is greater then Start_Day
    if (start_day in dayofweek and end_day in dayofweek):
        if (dayofweek.index(end_day) < dayofweek.index(start_day)):
            COND('The End Day ' + end_day.upper() + ' must be greater then the Start Day of ' + start_day.upper())

    ### Make sure End_Time is greater than Start_Time
    start_time = open_hours1_1 + ' ' + open_hours1_2
    end_time = open_hours2_1 + ' ' + open_hours2_2

    if (start_time in timeofday and end_time in timeofday):
        if (timeofday.index(end_time) <= timeofday.index(start_time)):
            COND('The End Time ' + end_time.upper() + ' must be greater then the Start Time of ' + start_time.upper())


    #-----------------------------------------------------
    ### Test the 2nd Days and Times if they are used

    if (len(start_day2)>0 or len(end_day2)>0):  # If either are used
        #if either are used test to make sure they are greater then above.
        if (start_day in dayofweek and end_day in dayofweek and start_day2 in dayofweek): # Test start_day2
            if (dayofweek.index(start_day2) <= dayofweek.index(start_day) or dayofweek.index(start_day2) <= dayofweek.index(end_day)):
                COND('The Additional Operation Start Day ' + start_day2.upper() + ' must be greater then the Normal Opereration days')
        if (start_day in dayofweek and end_day in dayofweek and end_day2 in dayofweek): # Test end_day2
            if (dayofweek.index(end_day2) <= dayofweek.index(start_day) or dayofweek.index(end_day2) <= dayofweek.index(end_day)):
                COND('The Additional Operation End Day ' + end_day2.upper() + ' must be greater then the Normal Opereration days')

    if (len(start_day2)>0 and len(end_day2)>0):  # If both are used
        ### Make sure Start_Day2 and End_Day2 is not the same
        daysused2 = []
        for day in (start_day2, end_day2):
            if day not in daysused2:
                daysused2.append(day)
            else:
                COND(day.upper() + ' is already selected in Additional Operation days. The days of the week need to be different')
        daysused = None

        ### Make sure End_Day is greater then Start_Day
        if (start_day2 in dayofweek and end_day2 in dayofweek):
            if (dayofweek.index(end_day2) < dayofweek.index(start_day2)):
                COND('The Additional Operation End Day ' + end_day2.upper() + ' must be greater then the Start Day of ' + start_day2.upper())

    ### Make sure End_Time is greater than Start_Time
    if (len(open_hours21_1)>0 and len(open_hours22_1)>0):  #if used
        start_time2 = open_hours21_1 + ' ' + open_hours21_2
        end_time2 = open_hours22_1 + ' ' + open_hours22_2

        if (start_time2 in timeofday and end_time2 in timeofday):
            if (timeofday.index(end_time2) <= timeofday.index(start_time2)):
                COND('The Additional Operation End Time ' + end_time2.upper() + ' must be greater then the Start Time of ' + start_time2.upper())

