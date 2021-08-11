function organizzer(input) {
    let schedule = {};
    input.forEach(entry => {
        let [weekday, name] = entry.split(' ');
        if(schedule[weekday]){
            console.log(`Conflict on ${weekday}!`);
        }else{
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    });
    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
organizzer(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])