function rotation(array, n){
    while (n > 0){
        let item = array.shift();
        array.push(item);
        n--;
    }
    console.log(array.join(' '));
}

rotation([2, 4, 15, 31], 5)