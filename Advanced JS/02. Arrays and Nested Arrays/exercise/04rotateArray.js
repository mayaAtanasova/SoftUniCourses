function rotate(arr, n){
    for(let i = 0; i < n; i++){
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)