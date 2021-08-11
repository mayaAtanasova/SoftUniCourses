function match(string, char, sample){
    let result = string.replace('_', char);
    let output = result === sample ? 'Matched' : 'Not Matched';
    console.log(output);
}

match('Str_ng', 'o', 'Strong')