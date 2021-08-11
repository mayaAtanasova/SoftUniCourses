function arrayModifier(input) {
    let array = input.shift().split(' ').map(Number);

    for (let element of input) {
        let [command, id1, id2] = element.split(' ');
        [id1, id2] = [id1, id2].map(Number);
        if (command == 'swap') {
            let [temp1, temp2] = [array[id1], array[id2]];
            array[id2] = temp1;
            array[id1] = temp2;
        } else if (command == 'multiply') {
            let [temp1, temp2] = [array[id1], array[id2]];
            array[id1] = temp1 * temp2;
        } else if (command == 'decrease') {
            array = array.map(x => (x - 1));
        } else if (command == 'end') {
            break;
        }
    }
    console.log(array.join(', '));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])