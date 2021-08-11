function solve(input) {
    let message = input.shift();
    let commands = {
        Move: move,
        Insert: insert,
        ChangeAll: changeAll
    }
    while (input[0] != 'Decode') {
        let tokens = input[0].split('|').map(x => !isNaN(Number(x)) ? Number(x) : x);
        message = commands[tokens[0]](message, tokens[1], tokens[2]);
        input.shift();
    }
    function move(str, n) {
        let firstN = str.substring(0, n);
        let remainder = str.substring(n);
        return remainder + firstN;
    }
    function insert(str, index, value) {
            let left = str.substring(0, index);
            let right = str.substring(index);
            return left + value + right;
    }
    function changeAll(str, substring, replacement) {
        str = str.split(substring).join(replacement);
        return str;
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|?|?',
    'Decode'
]);