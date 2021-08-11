function nextDay(year, month, date) {
    let today = new Date(year, month - 1, date);
    let nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth();
    let newDay = nextDay.getDate();

    console.log(`${newYear}-${newMonth + 1}-${newDay}`);

}
nextDay(2016, 9, 30)