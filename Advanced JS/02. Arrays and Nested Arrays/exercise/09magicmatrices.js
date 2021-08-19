function checkMagic(matrix) {
    let magicNr = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;
    let sumHor = 0;
    let sumVert = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            sumHor += matrix[i][j];
            sumVert += matrix[j][i];
        }
        if (sumHor != magicNr || sumVert != magicNr) {
            isMagic = false;
            break;
        }
        sumHor = 0;
        sumVert = 0;
    }
    console.log(isMagic);
}

checkMagic(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]

)