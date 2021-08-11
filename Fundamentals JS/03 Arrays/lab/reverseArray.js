function reverseArray(n, inArray){
    let outArray = [];

    for(let i = n-1; i >= 0; i--){
        outArray.push(inArray[i])
    }
    console.log(outArray.join(' '));

}

reverseArray(4, [10, 20, 30, 40, 50])