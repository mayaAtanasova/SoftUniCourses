function weekDay(n){
    let week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]
if (n < 0 || n > 7){
    console.log('Invalid day!');
}else{
    console.log(week[n-1]);
}
}

weekDay(8)