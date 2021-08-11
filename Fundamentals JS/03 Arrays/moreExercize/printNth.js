function printNth(array) {
    let resultA = [];
    let step = Number(array.pop());
    resultA.push(array[0]);
    let index = 0;
    while (index + step <= array.length) {
        resultA.push(array[index + step]);
        index += step;
    }
    console.log(resultA.join(" "));
}

printNth(['1', '2', '3', '4', '5', '6'])