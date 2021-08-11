function cs(input) {
    let energy = input.shift();
    let battleCount = 0;
    let isDead = false;

    for (let i = 1; i <= input.length; i++) {
        if (input[i-1] == 'End of battle'){
            break;
        }else{
            if (energy >= input[i - 1]) {
                energy -= input[i - 1];
                battleCount++;
                if (i % 3 == 0) {
                    energy += battleCount;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${battleCount} won battles and ${energy} energy`);
                isDead = true;
            }
        }
    }
    if (isDead == false){
        console.log(`Won battles: ${battleCount}. Energy left: ${energy}`);
    }
}

cs([200,54, 14, 28, 13, 'End of battle'])