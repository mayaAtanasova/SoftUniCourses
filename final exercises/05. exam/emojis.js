function solve(str) {
    //calculate cool treshold by multiplying digits in text
    let nrsPattern = /\d/g;
    let nrs = str.match(nrsPattern);
    let treshold = nrs.reduce((a, b) => a * b, 1);
    console.log(`Cool threshold: ${treshold}`);
    //find emojis in text and store them
    let store = []
    let pattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g;
    let match = pattern.exec(str);
    while (match != null) {
        store.push(match[0]);
        match = pattern.exec(str);
    }
    console.log(`${store.length} emojis found in the text. The cool ones are:`);
    //filter all emojis acc.to cool treshold
    let filtered = store.filter(x => value(x) >= treshold).forEach(e =>{
        console.log(e);
    });

    //calculate emoji value
    function value(str) {
        let result = 0;
        for (let letter of str) {
            result += letter.charCodeAt(0);
        }
        return result;
    }

}
solve("It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**.")