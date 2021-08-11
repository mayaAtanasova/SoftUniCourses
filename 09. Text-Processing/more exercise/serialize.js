function serialize(input) {
    input = input[0];
    let result = {};
    for (let i = 0; i < input.length; i++) {
        let letter = input[i];
        if (!Object.keys(result).includes(letter)) {
            result[letter] = [];
            result[letter].push(i);
        }else{
            result[letter].push(i);
        }
    }
    let arr = Object.entries(result).forEach(el =>{
        console.log(`${el[0]}:${el[1].join('/')}`);
    });
}

serialize([ 'abababa', '' ])