function equalSums(array) {

    let equalSum = false;

    for (let i = 0; i < array.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;
        if (i != 0) {
            for (let j = i - 1; j >= 0; j--) {
                sumLeft += array[j];
            }
        } 
        if (i != array.length - 1) {
            for (let k = i + 1; k < array.length; k++) {
                sumRight += array[k];
            }
        }
        if (sumLeft == sumRight) {
            equalSum = true;
            console.log(i);
            break;
        } else {
            equalSum = false;
        }
    }
    if (equalSum === false) {
        console.log('no');
    }
}

    equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])