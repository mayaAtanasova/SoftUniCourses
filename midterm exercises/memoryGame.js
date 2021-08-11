function memory(input) {
    let sequence = input.shift().split(' ');
    for (let i = 0; i < input.length; i++) {
        if (input[i] == 'end') {
            if (sequence.length != 0) {
                console.log(`Sorry you lose :( 
                ${sequence.join(' ')}`);
            }
            break;
        } else {
            if (sequence.length == 0) {
                console.log(`You have won in ${i} turns!`);
                break;
            }
            let indices = input[i].split(' ').map(Number).sort((a, b) => a - b);
            // console.log(indices);
            if (checkValid(indices)) {
                if (sequence[indices[0]] === sequence[indices[1]]) {
                    console.log(`Congrats! You have found matching elements - ${sequence[indices[0]]}!`);
                    sequence = sequence.filter((x, index) => indices.indexOf(index) == -1);
                } else {
                    console.log('Try again!');
                }
            } else {
                console.log('Invalid input! Adding additional elements to the board"');
                sequence.splice((sequence.length / 2), 0, `-${i+1}a`, `-${i+1}a`)
            }
        }
    }

    function checkValid(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 0 || array[i] >= input.length ||
                array[i] === array[i + 1] ||
                array[i] === array[i - 1]) {
                return false;
            } else {
                return true;
            }
        }
    }
}
memory( [
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])