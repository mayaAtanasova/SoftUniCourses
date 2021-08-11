function solve(str) {
    //calculate cool treshold by multiplying digits in text
    let nrsPattern = /\d/g;
    let nrs = [];
    let matchNr = nrsPattern.exec(str);
    while(matchNr != null){
        nrs.push(matchNr[0]);
        matchNr = nrsPattern.exec(str);
    }
    let treshold = nrs.reduce((a, b) => a * b, 1);
    //find emojis in text and store them
    let store = [];
    let pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = pattern.exec(str);
    while (match) {
        store.push(match[0]);
        match = pattern.exec(str);
    }
    //filter all emojis acc.to cool treshold
    let cool = [];
    for(let emoji of store){
        if (value(emoji) > treshold){
            cool.push(emoji);
        }
    }

    console.log(`Cool threshold: ${treshold}`);
    console.log(`${store.length} emojis found in the text. The cool ones are:`);
    console.log(`${cool.join('\n')}`);

    //calculate emoji value
    function value(str) {
        let result = 0;
        for (let letter of str) {
            result += letter.charCodeAt(0);
        }
        return result;
    }
}
solve("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")