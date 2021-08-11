function rotate(array){
    let rotations = Number(array.pop());
    for (let i = 1; i <= rotations; i++){
        let poppedItem = array.pop();
        array.unshift(poppedItem);
    }
    console.log(array.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])