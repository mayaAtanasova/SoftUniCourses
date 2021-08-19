function findSmallest(arr){
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}
console.log(findSmallest([3, 0, 10, 4, 7, 3]));