function extract(arr){
    let result = []
    let currMax = arr.shift();
    result.push(currMax);
    arr.forEach(el => {
        if (el >= currMax){
            result.push(el);
            currMax = el;
        }
    })
    return result;
}

console.log(extract ([20, 20, 1, 2, 3, 4] ))