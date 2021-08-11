function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let lost = false;
    // console.log(sequence);
    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine == 'end') {
            if (sequence.length > 0) {
                lost = true;
            }
            break;
        } else {
            let [id1, id2] = commandLine.split(' ').map(Number);
            // console.log(id1, id2);
            if (id1 == id2 ||
                id1 < 0 ||
                id2 < 0 ||
                id1 >= sequence.length ||
                id2 >= sequence.length) {
                sequence.splice((sequence.length / 2), 0, `-${i+1}a`, `-${i+1}a`)
                console.log('Invalid input! Adding additional elements to the board');
            } else if (sequence[id1] == sequence[id2]) {
                console.log(`Congrats! You have found matching elements - ${sequence[id1]}!`);
                sequence = sequence.filter(x => x != sequence[id1]);
            } else if (sequence[id1] != sequence[id2]) {
                console.log('Try again!');
            }
            if (sequence.length == 0) {
                console.log(`You have won in ${i+1} turns!`);
                break;
            }

        }
    }
    if (lost) {
        console.log(`Sorry you lose :(
            ${sequence.join(' ')}`);
    }
}

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])