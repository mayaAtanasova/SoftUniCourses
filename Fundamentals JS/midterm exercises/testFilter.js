function testFilter(array, indices){
let result = array.filter((x, index) => indices.indexOf(index) == -1);
console.log(result);
}
testFilter([1,2,3,4,5], [0,3])