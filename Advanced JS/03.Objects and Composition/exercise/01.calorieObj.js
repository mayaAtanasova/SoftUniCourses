function composeObj(arr) {
    let items = arr.filter((x, i) => i % 2 == 0);
    let values = arr.filter((x, i) => i % 2 == 1).map(Number);
    let result ={};
    items.forEach((item,i) =>{
        result[item] = values[i];
    })
    console.log(result);
}
composeObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

function compose2(arr){
    let result = {};
    for(let i = 0; i < arr.length; i+=2){
        Object.assign(result, {[arr[i]]: Number([arr[i+1]])});
    }
    console.log(result);
}

compose2(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

