function findN(arr, n) {
    return arr.filter((x, i) => i % n === 0);
}
console.log(findN(['dsa',
'asd', 
'test', 
'tset'], 
2
));