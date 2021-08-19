function findEven(arr){
    return arr.filter(x => arr.indexOf(x) % 2 == 0).join(' ')
}

console.log(findEven(['5', '10']));