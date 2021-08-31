function convertToHex(nr){
let result = [];
while(Math.floor(nr / 16 > 0)){
    let base = Math.floor(nr / 16);
    result.push(nr % 16);
    nr = base;
}
result = result.map(x => x < 10 ? x :
    x == 10 ? 'A' :
    x == 11 ? 'B' :
    x == 12 ? 'C' :
    x == 13 ? 'D' :
    x == 14 ? 'E' :
    'F');
return result.reverse().join('');
}

let myres = convertToHex(186)
console.log(myres);