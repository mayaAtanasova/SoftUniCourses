function lift(input) {
    let people = Number(input.shift());
    let wagons = input[0].split(' ').map(Number);
    let peopleToBoard;
    let peopleFinished = false;
    // console.log(typeof(wagons[0]));
    for (let i = 0; i < wagons.length; i++) {
        let wagon = wagons[i];
        if (wagon < 4) {
            peopleToBoard = 4 - wagon;
            if (peopleToBoard > people) {
                wagon += people;
                wagons[i] = wagon;
                console.log(`The lift has empty spots!
                ${wagons.join(' ')}`);
                peopleFinished = true;
                break;
            } else if (peopleToBoard == people) {
                wagon += people;
                wagons[i] = wagon;
                console.log(`${wagons.join(' ')}`);
                peopleFinished = true;
                break;
            } else {
                wagon += peopleToBoard;
                wagons[i] = wagon;
                people -= peopleToBoard;
            }
        }
    }
    if (!peopleFinished) {
        console.log(`There isn't enough space! ${people} people in a queue!
        ${wagons.join(' ')}`);
    }
}

lift([
    "12",
    "0 0 0"
])