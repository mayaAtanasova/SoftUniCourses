function theLift(input) {
    let waitingPeople = Number(input.shift());
    let liftState = input[0].split(' ').map(Number);
    let filledCabins = [];
    while (waitingPeople > 0){
        for (let i = 0; i < liftState.length; i++) {
            if (waitingPeople >= 4) {
                if (liftState[i] < 4) {
                    waitingPeople -= (4 - liftState[i]);
                    liftState[i] = 4;
                    filledCabins.push(4);
                }
            } else {
                if (4 - liftState[i] <= waitingPeople) {
                    waitingPeople -= 4 - liftState[i];
                    liftState[i] = 4;
                    filledCabins += 4;
                } else {
                    liftState[i] += waitingPeople;
                    waitingPeople = 0;
                }
            }
        }
    }
    if (filledCabins.length == liftState.length || waitingPeople <= 0) {
        if (waitingPeople <= 0 && filledCabins.length != liftState.length) {
            console.log(`The lift has empty spots!
                ${liftState.join(' ')}`);
        } else if (waitingPeople > 0 && filledCabins.length == liftState.length) {
            console.log(`There isn't enough space! ${waitingPeople} people in a queue!
                ${liftState.join(' ')}`);
        } else {
            console.log(liftState.join(' '));
        }
    }

}

theLift([
    "20",
    "0 2 0"
])