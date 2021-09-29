function calorize(arr) {
    console.log(arr.reduce((acc, c, i) => {return i % 2 === 0 ? { ...acc, [c]: Number(arr[i + 1])} : { ...acc };}, { }));
}


calorize(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);