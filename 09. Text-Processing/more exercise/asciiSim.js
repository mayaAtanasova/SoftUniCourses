function simulate(input) {
    let startCode = Math.min(input[0].charCodeAt(0), input[1].charCodeAt(0));
    let endCode = Math.max(input[0].charCodeAt(0), input[1].charCodeAt(0));
    let text = input[2];
    let sum = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) > startCode && text.charCodeAt(i) < endCode) {
            sum += text.charCodeAt(i);
        }
    }
    console.log(sum);
}
simulate(['a', '1', 'jfe392$#@j24ui9ne#@$'])