function natCourt(input) {
    let ansPerHour = Number(input[0]) + Number(input[1]) + Number(input[2]);
    let people = Number(input[3]);
    let totHours = 0;
    let breakHours = 0;

    while (people > 0) {
        people -= ansPerHour;
        totHours++;
        if (totHours > 0 && totHours % 3 == 0) {
            breakHours++;
        }
    }
console.log(`Time needed: ${totHours + breakHours}h.`);
}

natCourt([1, 2, 3, 45])