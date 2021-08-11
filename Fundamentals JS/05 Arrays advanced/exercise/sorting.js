function sorting(input) {
    let arr = input.sort((a, b) => b - a);
    let result = [];
    while (arr.length != 0) {
        num = arr.shift();
        result.push(num);
        arr.reverse();
    }
    console.log(result.join(' '));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])