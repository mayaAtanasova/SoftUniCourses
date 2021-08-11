function magic(input){
    let isMagic = true;
    let magicNumber = 0;
    for (let i = 0; i < input.length; i++){
        magicNumber += input[0][i];
    }
    let sumH = 0;
    let sumV = 0;

    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < input.length; j++){
            sumH += input[i][j];
        }
        if (sumH != magicNumber){
            isMagic = false;
            break;
        }else{
            sumH = 0;
        }
        for (let j = 0; j < input.length; j++){
        sumV += input[j][i];
        }
        if (sumV != magicNumber){
            isMagic = false;
            break;
        }else{
            sumV = 0;
        }
    }
    if (isMagic == true){
        console.log('true');
    }else{
        console.log('false');
    }
}

magic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   )