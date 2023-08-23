function getDSTDates(startYear, endYear) {
    const dstDates = [];

    for (let year = startYear; year <= endYear; year++) {
        // DST Start
        var firstOfMarch = new Date(year, 2, 1);
        var daysUntilFirstSundayInMarch = (7 - firstOfMarch.getDay()) % 7;
        var secondSundayInMarch = firstOfMarch.getDate() + daysUntilFirstSundayInMarch + 7;
        var dstStartDate = new Date(year, 2, secondSundayInMarch);

        // DST End
        var firstOfNovember = new Date(year, 10, 1);
        var daysUntilFirstSundayInNov = (7 - firstOfNovember.getDay()) % 7;
        var firstSundayInNovember = firstOfNovember.getDate() + daysUntilFirstSundayInNov;
        var dstEndDate = new Date(year, 10, firstSundayInNovember);

        dstDates.push({
            year: year,
            start: dstStartDate,
            end: dstEndDate
        });
    }

    return dstDates;
}

function isEDT() {

    const startYear = 2023;
    const endYear = 2027;

    const dstDates = getDSTDates(startYear, endYear);

    dstDates.forEach(entry => {
        console.log(`${entry.year}: DST starts on ${entry.start.toDateString()} and ends on ${entry.end.toDateString()}`);
    });


    const now = new Date();

    // Get the current year's DST start and end dates
    const dstStart = new Date(now.getFullYear()+1, 2, 8 - new Date(now.getFullYear(), 2, 1).getDay() + 7);
    const dstEnd = new Date(now.getFullYear()+1, 10, 1 - new Date(now.getFullYear(), 10, 1).getDay() + 7);

    console.log(dstStart)
    console.log(dstEnd)

    // Check if current date is between DST start and end dates
    return now >= dstStart && now < dstEnd;
}
