function sequences(input) {
    let result = uniq(input);

    function uniq(j) {
        var seen = {};
        return j.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }

    console.log(result);
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])

// const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// equals(a, b); // true