function solve(arr) {
    let nrs = arr.filter(x => !isNaN(x));
    let operators = arr.filter(x => isNaN(x));
    
    let operations = {
        '+': (a, b) => b + a,
        '-': (a, b) => b - a,
        '*': (a, b) => b * a,
        '/': (a, b) => b / a,
    };
    if(nrs.length -1 < operators.length){
        console.log('Error: not enough operands!');
    }else if(nrs.length -1 > operators.length){
        console.log('Error: too many operands!');
    }else{
        nrs = nrs.reverse();
        let result = nrs.reduce((acc, c, i) => {
            let curOp = operators[i-1];
                let command = operations[curOp];
                let result = command(acc, c);
                return result;
        }, );
        console.log(result);
    }
}