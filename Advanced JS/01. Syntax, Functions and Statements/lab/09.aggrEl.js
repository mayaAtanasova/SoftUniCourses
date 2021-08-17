function aggregateEl(arr) {
    let sumAll = arr.reduce((a, b) => a + b, 0);
    let invSumAll = arr.map(x => 1 / x).reduce((a, b) => a + b, 0);
    let concatAll = arr.join('');
    console.log(sumAll);
    console.log(invSumAll);
    console.log(concatAll);
}

aggregateEl([1, 2, 3]);
console.log('----');
aggregateEl([2, 4, 8, 16])