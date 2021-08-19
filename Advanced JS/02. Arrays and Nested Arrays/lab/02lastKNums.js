function findLast(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let el = 0;
        if (result.length >= k + 1) {
            el = result.slice(i - k, i).reduce((a, b) => a+b, 0);
        } else {
            el = result.reduce((a,b) => a + b, 0);
        }
        result.push(el);
    }
    return result;
}

console.log(findLast(6,3));