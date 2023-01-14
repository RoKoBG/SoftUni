function PreviousDay(year,month,day) {
    const nextDay = new Date(year, month-1, day-1);
    const newYear = nextDay.getFullYear();
    const newMonth = nextDay.getMonth()+1;
    const newDay = nextDay.getDate();
    
    console.log(`${newYear}-${newMonth}-${newDay}`);
    
}PreviousDay(2016, 9, 30);
PreviousDay(2015, 5, 10);
PreviousDay(2015, 10, 1);