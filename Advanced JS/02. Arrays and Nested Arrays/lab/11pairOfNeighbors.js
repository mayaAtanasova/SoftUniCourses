function findPairs(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let counter = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {
            if (matrix[i][j] === matrix[i][j + 1]) {
                counter++;
            }
        }
    }
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                counter++;
            }
        }
    }
    return counter;
}
let result = findPairs([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
    ])

    console.log(result);