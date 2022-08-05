function matchDates(input) {
const regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
const dates = input[0];
let validDate = regex.exec(dates);

while(validDate !== null){
    let day = validDate.groups['day'];
    let month = validDate.groups['month'];
    let year =  validDate.groups['year'];
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    validDate = regex.exec(dates);
}


    
}matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);