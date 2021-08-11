function findBiggest(a, b, c){
let arr = [];
arr.push(a);
arr.push(b);
arr.push(c);
arr.sort((a,b) => a - b)
console.log(arr[2]);
}

findBiggest(-2, 7, 3)