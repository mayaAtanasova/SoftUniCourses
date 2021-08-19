function tick(moves) {
    let board = [
        ['false', 'false', 'false'],
        ['false', 'false', 'false'],
        ['false', 'false', 'false']];

    let lastMoved = 'O';
    let freeSpace = 9;
    let winner = '';

    while (moves.length > 0) {
        //make a move
        let [x, y] = moves[0].split(' ');
        //if the place on the board is free:
        if (board[x][y] === 'false') {
            if (lastMoved === 'O') {
                board[x][y] = 'X';
                lastMoved = 'X';
                freeSpace--;
            } else {
                board[x][y] = 'O';
                lastMoved = 'O';
                freeSpace--;
            }
        } else {
            //if the place is taken
            console.log('This place is already taken. Please choose another!');
        }
        //the next move
        moves.shift();
        //check if there is a winner
        if (checkWinner(board)) {
            //if yes print winner and break
            printWinner();
            break;
        } else {
            //check if all spaces are filled
            //if nobody wins and the board is filled print and break
            if (freeSpace == 0) {
                console.log('The game ended! Nobody wins :(');
                board = board.map(x => x.join('\t'));
                console.log(board.join('\n'));
                break;
            }
        }
    }
    function checkWinner(matrix) {
        let rows = [];
        let cols = [];
        let diags = [];
        for (let i = 0; i < matrix.length; i++) {
            rows.push(matrix[i].join(''));
            let tempCol = '';
            for (let j = 0; j < matrix.length; j++) {
                tempCol += matrix[j][i];
            }
            cols.push(tempCol);
            tempCol = '';
        }
        let diag1 = matrix[0][0] + matrix[1][1] + matrix[2][2];
        let diag2 = matrix[0][2] + matrix[1][1] + matrix[2][0];
        diags.push(diag1, diag2);

        if (rows.includes('XXX') || cols.includes('XXX') || diags.includes('XXX')) {
            winner = 'X';
            return true;
        }
        if (rows.includes('OOO') || cols.includes('OOO') || diags.includes('OOO')) {
            winner = 'O';
            return true;
        }
        return false;
    }

    function printWinner() {
        console.log(`Player ${winner} wins!`);
        board = board.map(x => x.join('\t'));
        console.log(board.join('\n'));
    }
}

tick(
    ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]

)