function findEqualNbr(matrix){
    let count = 0;
    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[0].length; j++){
            let trialNr = matrix[i][j];
            if (i == matrix.length - 1){
                if (j != matrix[0].length -1){
                    if(matrix[i][j+1] == trialNr){
                        count++;
                }
                }
            }else{
                if (j != matrix[0].length - 1){
                    if (matrix[i+1][j] == trialNr ||
                        matrix[i][j+1] == trialNr){
                            count++;
                        }
                }else{
                    if (matrix[i+1][j] == trialNr){
                            count++;
                        }
                }
            }
        }
    }
    console.log(count);
}
findEqualNbr([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],
])