function primeChecker(number){
    let isPrime = false;
    if (number >= 0 && number <= 2){
        isPrime = true;
    }else{
        for (let i = 3; i < number; i++){
            if(number % i === 0){
                isPrime = false;
                break;
            }else{
                isPrime = true;
            }
        }
    }
    console.log(isPrime);
}
primeChecker(8)