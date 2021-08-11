function ladybug(input) {
    // get size of field:
    let arrayLen = Number(input.shift());
    //initialize ladybug cells:
    let ladyArray = [];
    // get the indices, which contain ladybugs initially:
    let indices = input[0].split(' ');
    // convert all indices to numbers
    for (let i = 0; i < indices.length; i++) {
        indices[i] = Number(indices[i]);
    }
    // populate the initial array with ladybugs:
    for (let i = 0; i < arrayLen; i++) {
        if (indices.includes(i)) {
            ladyArray.push(1);
        } else {
            ladyArray.push(0);
        }
    }
    // get the lists of commands:
    for (let i = 1; i < input.length; i++) {
        let commandLine = input[i].split(' ')
        // console.log(commandLine);
        // choose which ladybug to move:
        let ladyIndex = Number(commandLine[0]);
        //get the direction of move:
        let direction = commandLine[1];
        //get the fly length:
        let flyLen = Number(commandLine[2]);
        // check if there is a ladybug in this position:
        if (ladyArray[ladyIndex] == 1) {
            // check the direction and act accordingly:
            if (direction == 'right') {
                // first empty the current cell:
                ladyArray[ladyIndex] = 0;
                // check that the bug does not fly over the limit:
                if (ladyIndex + flyLen < arrayLen) {
                    // check if every new landing cell is occupied:
                    for (let i = ladyIndex + flyLen; i < arrayLen; i += flyLen) {
                        if (ladyArray[i] == 0) {
                            ladyArray[i] = 1;
                            break;
                        }
                    }
                }
            }
            //the same for the opposite direction:
            if (direction == 'left') {
                // first empty the current cell:
                ladyArray[ladyIndex] = 0;
                // check if the bug flies over the limit
                if (ladyIndex - flyLen > 0) {
                    // check if every new landing cell is occupied:
                    for (let i = ladyIndex - flyLen; i > 0; i -= flyLen) {
                        if (ladyArray[i] == 0) {
                            ladyArray[i] = 1;
                            break;
                        }
                    }
                }
            }
        }
    }
    console.log(ladyArray.join(' '));
    // console.log(indices[0]);
}
ladybug([5, '0 1 2 3 4',
    '4 left 1']
)