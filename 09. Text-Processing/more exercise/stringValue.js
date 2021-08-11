function solve(input) {
    let [text, register] = input;
    
    if (register == 'LOWERCASE') {
        text = text.split('').filter(x => x.toLocaleLowerCase() == x).join('');
    }
    if (register == 'UPPERCASE') {
        text = text.split('').filter(x => x.toLocaleUpperCase() == x).join('');
    }
    let sum = 0;
    for (let i = 0; i < text.length; i++){
        if(isLetter(text[i])){
            sum += text.charCodeAt(i)
        }
    }

    function isLetter(a) {
        let bool = (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 91) ||
            (a.charCodeAt(0) > 96 && a.charCodeAt(0) < 123);
        return bool;
    }
    console.log(`The total sum is: ${sum}`);
}

solve(['AC/DC', 'UPPERCASE', ''])