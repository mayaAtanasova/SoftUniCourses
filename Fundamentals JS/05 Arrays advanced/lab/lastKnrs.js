function lastK(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        result.push(sum(result.slice(-k)));
    }

    function sum(array) {
        let sum = 0;
        for (let element of array) {
            sum += element;
        }
        return sum;
    }
    console.log(result.join(' '));
}

lastK(8,2)