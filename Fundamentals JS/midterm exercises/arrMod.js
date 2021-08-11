function arrMod(input) {
    let array = input.shift().split(' ').map(Number);
    for (let commandLine of input) {
        commandLine = commandLine.split(' ');
        let command = commandLine.shift();
        if (command == 'end') {
            break;
        } else {
            let [index1, index2] = commandLine.map(Number);
            if (command == 'swap') {
                let tempEl1 = array[index1];
                let tempEl2 = array[index2];
                array[index1] = tempEl2;
                array[index2] = tempEl1;
            } else if (command == 'multiply') {
                array[index1] *= array[index2];
            } else if (command == 'decrease') {
                array = array.map(x => x - 1);
            }
        }
    }
    console.log(array.join(', '));
}
arrMod([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
])