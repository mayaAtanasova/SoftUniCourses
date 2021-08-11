function deliverHeart(input) {
    //define neighborhood:
    let nbhood = input.shift().split('@').map(Number);
    // set Cupid position at index 0:
    let houseCount = 0;
    let cupidIndex = 0;
    //jump until 'Love!' command:
    for (let i = 0; i < input.length; i++) {
        let [command, jumpLength] = input[i].split(' ');
        jumpLength = Number(jumpLength);
        if (command == 'Love!') {
            break;
        } else {
            //calculate indexToJump:
            cupidIndex += jumpLength;
            //if jumped over the end of the neighborhood go back to teh beginning
            if (cupidIndex > nbhood.length - 1) {
                cupidIndex = 0;
            }
            //if jumped to a house where the hearts have reached 0, console.log(`Place {houseIndex} already had Valentine's day.`)
            if (nbhood[cupidIndex] <= 0) {
                console.log(`Place ${cupidIndex} already had Valentine's day.`)
            } else {
                //every jump decreases hearts by 2
                nbhood[cupidIndex] -= 2;
                //if hearts become 0 console.log(`Place {houseIndex} } has Valentine's day.)
                if (nbhood[cupidIndex] <= 0) {
                    console.log(`Place ${cupidIndex} has Valentine's day.`)
                }
            }
        }
    }
    //print Cupid's last position:
    console.log(`Cupid's last position was ${cupidIndex}.`);
    //check how many houses had valentine's day:
    for (let house of nbhood) {
        if (house > 0) {
            houseCount++;
        }
    }
    //check if all houses had v-day and print result
    if (houseCount === 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${houseCount} places.`);
    }
}



deliverHeart(['2@4@2',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
])