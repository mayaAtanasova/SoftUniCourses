function reveal(input) {
    let message = input.shift();
    let line = input.shift();
    let commands = {
        InsertSpace: insSpace,
        Reverse: rev,
        ChangeAll: chAll
    }
    while (line != 'Reveal') {
        let tokens = line.split(':|:');
        message = commands[tokens[0]](message, tokens[1], tokens[2]);
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);

    function insSpace(message, index) {
        message = message.slice(0, index) + ' ' + message.slice(index);
        console.log(message);
        return message;
    }
    function rev(message, substring) {
        let ind = message.indexOf(substring);
        if (ind != -1) {
            let temp = message.substring(ind, ind + substring.length).split('').reverse().join('');
            message = message.substring(0, ind) + message.substring(ind + substring.length) + temp;
            console.log(message);
        } else {
            console.log('error');
        }
        return message;
    }
    function chAll(message, substring, replacement) {
        message = message.split(substring).join(replacement);
        console.log(message);
        return message;
    }
}

reveal([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])