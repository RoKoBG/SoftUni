function matchDates(input) {
    const regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    const dates = input[0];
    const splitRegex= /[-.\/]/g;
    const validDates = dates.match(regex);

    for(let date of validDates){
        const [day, month, year] = date.split(splitRegex);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);


    }
    
}matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);