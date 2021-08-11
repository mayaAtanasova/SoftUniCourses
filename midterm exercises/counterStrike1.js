function counterStrike(input) {
    let energy = Number(input.shift());
    let count = 0;
    let lost = false;

    for (let dist of input) {
        if (dist != 'End of battle') {
            dist = Number(dist);
            if (dist <= energy) {
                energy -= dist;
                count++;
            } else {
                energy = 0;
                lost = true;
                break;
            }
            if (count > 0 && count % 3 === 0) {
                energy += count;
            }
        }else{
            break;
        }
    }
    if (lost) {
        console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
    } else {
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
    }
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
])