function condense(str){
let result = [];
for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(str[i+1] != ch){
        result.push(ch);
    }
}
console.log(result.join(''));
}

condense('qqqwerqwecccwd')