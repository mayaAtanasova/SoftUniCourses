function nrs(input) {
    let sequence = input.split(' ').map(Number).sort((a, b) => b - a);
    let avg = sequence.reduce((a, b) => a + b) / sequence.length;
    let result = sequence.filter(x => x > avg);
    if (result.length == 0){
        console.log('No');
    }else if(result.length > 5){
        result = result.slice(0, 5);
        console.log(result.join(' '));
    }else{
        console.log(result.join(' '));
    }
}
nrs('-1 -2 -3 -4 -5 -6')