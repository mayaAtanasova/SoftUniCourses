function solve(input) {
    let message = input.shift();
    while (input[0] != 'Decode') {
        let tokens = input[0].split('|');
        let command = tokens.shift();
        if (command == 'Move') {
            let n = Number(tokens[0]);
            let first = message.substring(0, n);
            let last = message.substring(n);
            message = last + first;
        } else if (command == 'Insert') {
            let [index, value] = tokens;
            index = Number(index);
            let first = message.substring(0, index);
            let last = message.substring(index);
            message = first + value + last;
        } else if (command == 'ChangeAll') {
            let [substring, replacement] = tokens;
            message = message.split(substring).join(replacement);
        }
        input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])