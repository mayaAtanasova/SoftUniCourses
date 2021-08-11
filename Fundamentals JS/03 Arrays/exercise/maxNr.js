function maxNr(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let isBigger = true;

        for (let k = i + 1; k <= array.length; k++) {
            if (array[i] <= array[k]) {
                isBigger = false;
                break;
            }
        }
        if (isBigger == true) {
            result.push(array[i]);
        }
    }
    console.log(result.join(' '));
}

maxNr([27, 19, 42, 2, 13, 45, 48])