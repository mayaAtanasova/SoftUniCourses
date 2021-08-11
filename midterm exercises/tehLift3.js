function theLift(input) {
    let ppl = Number(input.shift());
    let lift = input[0].split(' ').map(Number);
    let filled = false;

    for (let i = 0; i < lift.length; i++) {
        //if there is space on the wagon get some people on it
        if (lift[i] < 4) {
            let avSpace = 4 - lift[i];
            if (ppl >= avSpace) {
                ppl -= avSpace;
                lift[i] = 4;
            } else {
                lift[i] += ppl;
                ppl = 0;
            }
        }

        //check if all wagons are filled in, if yes, print and break
        let filledCabins = lift.filter(x => x != 4);
        if (filledCabins.length == 0){
            filled = true;
        }
        if (filled && ppl > 0) {
            console.log(`There isn't enough space! ${ppl} people in a queue!
            ${lift.join(' ')}`);
            break;
        }
        // if all people have boarded, print smth
        if (!filled && ppl <= 0) {
            console.log(`The lift has empty spots!
            ${lift.join(' ')}`);
            break;
        }
    }
    if (filled && ppl <= 0) {
        console.log(`${lift.join(' ')}`);
    }
}
theLift([
    "12",
    "0 0 0"
])