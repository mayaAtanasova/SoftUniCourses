function sumEven(array){
    let sum = 0;
    for (let number of array){
        number = Number(number);
        if(number % 2 === 0){
            sum += number;
        }
    }
    console.log(sum);
}

sumEven(['1','2','3','4','5','6']);