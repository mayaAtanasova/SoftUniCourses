function movingTarget(input) {
    let sequence = input.shift();
    sequence = sequence.split(' ').map(Number);

    for (let i = 0; i, input.length; i++) {
        let [command, index, value] = input[i].split(' ');
        index = Number(index);
        value = Number(value);
        if (command == 'End') {
            break;
        } else if (command == 'Shoot') {
            //if existing, shoot target at index - reduce value
            if (sequence[index]) {
                sequence[index] -= value;
                //if reaches 0, remove
                if (sequence[index] <= 0) {
                    sequence.splice(index, 1);
                }
            }
        } else if (command == 'Add') {
            //if index exists, insert target with given value
            if (sequence[index]) {
                sequence.splice(index, 0, value);
                //else, print....
            } else {
                console.log('Invalid placement!');
            }
        } else if (command == 'Strike') {
            //calculate range acc.to radius
            let beginRange = index - value;
            let endRange = index + value;
            //if any index in the range is invalid, print...
            if (beginRange < 0 || endRange >= sequence.length) {
                console.log('Strike missed!');
                //else remove targets in radius
            } else {
                sequence.splice(beginRange, 2 * value + 1);
            }
        }
    }
    console.log(sequence.join('|'));
}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
