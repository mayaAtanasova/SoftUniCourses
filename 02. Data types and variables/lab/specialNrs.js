function specialNrs(n){
    for(let i = 1; i <= n; i++){
        let sum = 0;
        let str = i.toString();
        for(let j = 0; j < str.length; j++){
            sum += Number(str[j]);
        }
        let result = (sum === 5 || sum === 7 || sum === 11);
        console.log(result
            ? `${i} -> True`
            : `${i} -> False`);
    }
}

specialNrs(15);