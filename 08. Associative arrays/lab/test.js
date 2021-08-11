let arr1 = [1,2,3,4]
function avg(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}
console.log(avg(arr1));