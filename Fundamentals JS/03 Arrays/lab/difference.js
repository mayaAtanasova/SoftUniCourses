function difference(array){
    
    let sumOdd = 0;
    let sumEven = 0;

    for (let number of array){
        number = Number(number);
        if (number % 2 === 0){
            sumEven += number;
        }else{
            sumOdd += number;
        }
    }
    let difference = sumEven - sumOdd;
    console.log(difference);
}

difference([3,5,7,9])