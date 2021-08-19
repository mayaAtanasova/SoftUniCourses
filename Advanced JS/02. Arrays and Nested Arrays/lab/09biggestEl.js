function findBiggest(matrix) {
    let arr = matrix.reduce((a, b) => a.concat(b));
    return Math.max(...arr);
}

console.log(findBiggest([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));