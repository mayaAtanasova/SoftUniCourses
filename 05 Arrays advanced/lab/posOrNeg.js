function sign(nums) {
    let result = [];
    for (let n of nums) {
        if (n < 0) {
            result.unshift(n);
        }else{
            result.push(n);
        }
    }
    console.log(result.join('\n'));
}
sign([3, -2, 0, -1])