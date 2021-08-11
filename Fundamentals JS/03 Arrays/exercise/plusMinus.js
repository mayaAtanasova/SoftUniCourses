function plusMinus(array){
    let sum1 = 0;
    let sum2 = 0;
    let array2 = [];

    for (let i = 0; i < array.length; i++){
        sum1 += array[i];
        if (array[i] % 2 == 0){
            array2[i] = array[i] + i;
        }else{
            array2[i] = array[i] - i;
        }
        sum2 += array2[i];
    }
    console.log(array2);
    console.log(sum1);
    console.log(sum2);
}

plusMinus([-5, 11, 3, 0, 2])