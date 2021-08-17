function weekDay(str){
    let week = {
        Monday: 1, 
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7
    };
    console.log(week.hasOwnProperty(str)
    ? week[str]
    : 'error')
}

weekDay('Monday')
weekDay('Friday')
weekDay('Invalid')