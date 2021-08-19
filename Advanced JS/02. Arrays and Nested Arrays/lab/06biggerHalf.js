function biggerHalf(arr){
    let sorted = arr.sort((a,b) => a-b);
    return sorted.length % 2 == 0 
    ? sorted.slice(arr.length/2)
    : sorted.slice(Math.floor(arr.length/2));
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));