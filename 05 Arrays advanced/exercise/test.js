function rotate(array, n){
    for (let i = 1; i <= n; i++){
        let temp = array.pop();
        array.unshift(temp);
    }
    console.log(array);
}
rotate([1,2,3,4,5], 3)