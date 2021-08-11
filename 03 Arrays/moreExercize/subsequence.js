function subsequence(array){
    let biggestNr = array[0];
    let result = [];
    for (let item of array){
        if (item >= biggestNr){
            result.push(item);
            biggestNr = item;
        }
    }
    console.log(result.join(' '));
}
subsequence([ 20, 3, 2, 15, 6, 1])