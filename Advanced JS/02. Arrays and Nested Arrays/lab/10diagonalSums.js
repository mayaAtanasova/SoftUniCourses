function diagonalSum(matrix) {
    let sumMain = 0;
    let sumSec = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumMain += matrix[i][i];
        sumSec += matrix[i][matrix.length - i - 1];
    }
    console.log(sumMain, sumSec);
}

diagonalSum([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]

)