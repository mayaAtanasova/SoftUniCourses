function deserialize(input) {
    let line = input.shift();
    let result = [];
    while (line != 'end') {
        let [letter, indices] = line.split(':');
        indices = indices.split('/').map(Number).forEach(index =>{
            result[index] = letter;
        });
        line = input.shift();
    }
    console.log(result.join(''));
}

deserialize(['a:0/2/4/6', 'b:1/3/5', 'end'])