function bomb(nrs, bomb) {

    let specialNr = bomb[0];
    let power = bomb[1];
    let index = nrs.indexOf(specialNr);
    while (nrs.indexOf(specialNr) != -1) {
        if (index - power >= 0) {
            nrs.splice((index - power), (2 * power + 1));
        } else {
            nrs.splice(0, (power + 1 + index));
        }
    }

    function sum(array) {
        let sum = 0;
        for (let el of array) {
            sum += el;
        }
        return sum;
    }
    console.log(sum(nrs));
}

bomb(
    [2, 1, 1, 1, 6],
    [2, 3]
)