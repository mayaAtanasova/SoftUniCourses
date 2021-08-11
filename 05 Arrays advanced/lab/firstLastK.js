function cutNums(arr){
    let k = arr.shift();
    let firstNums = arr.slice(0, k);
    let lastNums = arr.slice(-k);
    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}
cutNums([3, 6, 7, 8, 9] )