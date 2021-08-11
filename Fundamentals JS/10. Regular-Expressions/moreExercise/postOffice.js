function solve(text) {
    let [one, two, three] =text[0].split('|');
    let capsPatt = /([#\$%\*&])(?<caps>[A-Z]+)\1/
    let capitals = one.match(capsPatt).groups['caps'].split('');
    three = three.split(' ');
    // console.log(capitals);//['A', 'O', 'T', 'P']

    let lenPatt = /(?<code>\d{2}):(?<len>\d{2})/g;
    let lengths = {};
    let matchLen = lenPatt.exec(two);
    while(matchLen != null){
        lengths[matchLen.groups.code] = matchLen.groups.len;
        matchLen = lenPatt.exec(two);
    }
    // console.log(1);
    capitals.forEach(letter =>{
        let code = letter.charCodeAt(0);
        wordLen = Number(lengths[code]) + 1;
        let word = three.filter(x => x[0] == letter && x.length == wordLen);
        console.log(word.join(''));
    })
}

solve(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])