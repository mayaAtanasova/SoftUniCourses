function foo(str, stInd, count){
    let result = str.substring(stInd, stInd + count);
    console.log(result);
}

foo("ASentance", 1, 8)