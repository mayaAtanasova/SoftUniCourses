function primeChecker(number){
    if (number >= 0 || number <= 2){
        return true;
    }else{
        for (let i = 3; i <= number; i++){
            if(number % i === 0){
                return true;
                break;
            }else{
                return false;
            }
        }
    }
}
function printResult(number){
    result = primeChecker(number);
    console.log(result);
}

printResult(7);