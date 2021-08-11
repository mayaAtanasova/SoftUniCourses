function mt(input) {
    let sequence = input[0].split(' ').map(i => Number(i));
    for (let i = 1; i < input.length; i++) {
        let command = input[i];
        if (command == 'End') {
            break;
        } else {
            orders = command.split(' ');
            let action = orders[0];
            let index = Number(orders[1]);
            let value = Number(orders[2]);
            let target = sequence[index];
            if (action == 'Shoot') {
                if (target) {
                    target -= value;
                    sequence[index] = target;
                }
                if (target <= 0) {
                    sequence.splice(index+1, 1);
                }
            }
            if (action == 'Add') {
                if (target) {
                    sequence.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
            }
            if (action == "Strike") {
                let invalidStrike = false;
                for (let j = index - value; j <= index + value; j++) {
                    if (j <= 0 || j >= sequence.length) {
                        console.log('Strike missed!');
                        invalidStrike = true;
                        break;
                    }
                }
                if (!invalidStrike) {
                    sequence.splice(index - value, index + value);
                }
            }
        }
    }
    console.log(sequence.join('|'));
}

mt((["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
)