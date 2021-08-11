function bunnyKill(input) {
    let instructions = input.pop().split(' ');
    let matrix = [];
    let bunnyCount = 0;

    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(' ').map(Number);
        matrix.push(row);
    }

    for (let i = 0; i < instructions.length; i++) {
        let [x, y] = instructions[i].split(',').map(Number);
        let damage = matrix[x][y];
        matrix[x][y] = 0;
        if (!matrix[x - 1]) {
            if (matrix[x][y - 1]) {
                matrix[x][y - 1] -= damage;
            }
            if (matrix[x][y + 1]) {
                matrix[x][y + 1] -= damage;
            }
        } else if (matrix[x - 1]) {
            matrix[x - 1][y] -= damage;
            if (matrix[x - 1][y - 1]) {
                matrix[x - 1][y - 1] -= damage;
                matrix[x][y - 1] -= damage;
            }
            if (matrix[x - 1][y + 1]) {
                matrix[x - 1][y + 1] -= damage;
                matrix[x][y + 1] -= damage;
            }
        }
        if (!matrix[x + 1]) {
            if (matrix[x][y - 1]) {
                matrix[x][y - 1] -= damage;
            }
            if (matrix[x][y + 1]) {
                matrix[x][y + 1] -= damage;
            }
        } else if (matrix[x + 1]) {
            matrix[x + 1][y] -= damage;
            if (matrix[x + 1][y - 1]) {
                matrix[x + 1][y - 1] -= damage;
            }
            if (matrix[x + 1][y + 1]) {
                matrix[x + 1][y + 1] -= damage;
            }
        }


    }

    console.log(matrix)

}


bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1'
])