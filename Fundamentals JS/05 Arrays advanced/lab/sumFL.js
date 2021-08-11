function sumFL(arr){
let sum = arr.map(Number).shift() + arr.map(Number).pop();
return sum;
}
console.log(sumFL(['20', '30', '40'])); 