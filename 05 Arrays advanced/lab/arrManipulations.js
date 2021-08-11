function manipulate(input) {
    let array = input.shift().split(' ').map(Number);
    for (let i = 0; i < input.length; i++) {
        let [command, firstNr, secondNr] =
        input[i].split(' ');
        firstNr = Number(firstNr);
        secondNr = Number(secondNr);
        // console.log(command, firstNr, secondNr);
        switch (command) {
            case 'Add':
                array.push(firstNr)
                break;
            case 'Remove':
                array = array.filter(elmnt => elmnt !== firstNr);
                break;
            case 'RemoveAt':
                array.splice(firstNr, 1);
                break;
            case 'Insert':
                array.splice(secondNr, 0, firstNr);
                break;
        }
    }
    console.log(array.join(' '));
}
manipulate(['4 19 2 53 6 43',
    'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'
])