function distinct(array) {
    let result = array.filter((nr, index) => array.indexOf(nr) === index);
    console.log(result.join(' '));
}
distinct([20, 8, 12, 13, 4, 4, 8, 5])