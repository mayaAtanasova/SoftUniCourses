let arr = [
    ['poOl', 'loOp'],
    ['Part', 'traP'],
    ['leveL', 'Level'],
    ['pack', 'ckap'],
    ['sAw', 'wAs']
]
let filtered = arr.filter(x => x[0] === revStr(x[1]))
console.log(filtered);
function revStr(str){
    let result = str.split('').reverse().join('');
    // console.log(result);
    return result;
}
revStr('Part')