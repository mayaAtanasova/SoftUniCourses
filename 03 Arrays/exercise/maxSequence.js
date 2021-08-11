function maxSequence(array){
    let maxSequence = [array[0]];
    let tempSequence = [array[0]];

    for (let i = 0; i < array.length; i++){
        if (array[i+1] == array[i]){
            tempSequence.push(array[i+1]);
        }else{
            tempSequence = [array[i+1]]
        }
        if (tempSequence.length > maxSequence.length){
            maxSequence = tempSequence;
        }
    }
    console.log(maxSequence.join(' '));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])