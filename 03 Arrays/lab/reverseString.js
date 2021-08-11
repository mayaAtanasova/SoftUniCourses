function reverseString(array){
let n = (array.length - 1);
let m = n/2;

for (let i = 0; i < m ; i++){
    let initialElement = array[i];
    array[i] = array[n - i];
    array[n-i] = initialElement;
}
 
console.log(array.join(' '));
}


reverseString(['a', 'b', 'c', 'd', 'e'])