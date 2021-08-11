function solve(input) {
    let source = input.split(' ');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = [];

    source = source.filter(x => x.length > 0).forEach(element => {
        element = element.split('');
        firstL = element.shift();
        lastL = element.pop();
        nr = Number(element.join(''));
        posF = alphabet.indexOf(firstL.toLocaleLowerCase()) + 1;
        posL = alphabet.indexOf(lastL.toLocaleLowerCase()) + 1;

        if (firstL.toLocaleUpperCase() == firstL) {
            nr /= posF;
        }
        if (firstL.toLocaleLowerCase() == firstL) {
            nr *= posF;
        }
        if (lastL.toLocaleUpperCase() == lastL) {
            nr -= posL;
        }
        if (lastL.toLocaleLowerCase() == lastL) {
            nr += posL;
        }

        result.push(nr);
    });
    console.log(result.reduce((a, b) => a + b).toFixed(2));
}

solve('a1A')