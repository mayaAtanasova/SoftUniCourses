function digitSum(n){
    let sum = 0;
    let number = n.toString();

    for(let i = 0; i < number.length; i++){
        sum += n % 10;
        n = Math.trunc(n/10);
    }
    console.log(sum);
}

digitSum(97561);