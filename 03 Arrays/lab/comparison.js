function comparison(arr1, arr2){
    let sum = 0;
    let isIdentical = true;


    for (let i = 0; i < arr1.length; i++){
        if (Number(arr1[i]) == Number(arr2[i])){
            sum += Number(arr1[i]);
        }else{
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }
    if (isIdentical == true){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

comparison(['1','2','3','4','5'], ['1','2','4','4','5'])