function walling(input) {
    let wall = input.map(Number);
    let dailyConcreteArr = [];
    let dailyConcrete = 0;

    while (countComplete(wall, 30) < input.length) {
        for (let i = 0; i < wall.length; i++) {
            if ((wall[i]) < 30) {
                wall[i] += 1;
                dailyConcrete += 1;
            }
        }
        dailyConcreteArr.push(dailyConcrete * 195);
        dailyConcrete = 0;
    }

    function countComplete(array, value){
        let count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    function sumConcrete(array){
        let sum = 0;
        array.forEach(el => sum+= el);
        return sum * 1900;
    }
    console.log(dailyConcreteArr.join(', '));
    console.log(`${sumConcrete(dailyConcreteArr)} pesos`);

}
walling([17, 22, 17, 19, 17])