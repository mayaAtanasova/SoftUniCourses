function reset(input) {
    let pass = input.shift();
    let commandLine = input[0];
    let commands = {
        TakeOdd,
        Cut,
        Substitute
    }

    while (commandLine != 'Done') {
        let tokens = commandLine.split(' ');
        pass = commands[tokens[0]](pass, tokens[1], tokens[2]);
        //do stuff
        input.shift();
        commandLine = input[0];
    }

    console.log(`Your password is: ${pass}`);

    function TakeOdd(text) {
        text = text.split('');
        let result = [];
        for (let i = 0; i < text.length; i++) {
            if (i % 2 == 1) {
                result.push(text[i]);
            }
        }
        result = result.join('');
        console.log(result);
        return result;
    }

    function Cut(text, index, len) {
        index = Number(index);
        len = Number(len);
        let cutting = text.substring(index, index + len);
        let result = text.replace(cutting, '');
        console.log(result);
        return result;
    }

    function Substitute(text, substr, substit) {
        let result = text;
        if (text.indexOf(substr) == -1) {
            console.log('Nothing to replace!');
        } else {
            while (result.indexOf(substr) != -1) {
                result = result.replace(substr, substit);
            }
            console.log(result);
        }
        return result;
    }
}

reset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
])