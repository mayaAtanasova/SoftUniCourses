function process(arr){
    let result = [];
    arr.forEach(x =>{
        if (x >= 0){
            result.push(x);
        }else{
            result.unshift(x);
        }
    })
    return result;
}

console.log(process([3, -2, 0, -1]));