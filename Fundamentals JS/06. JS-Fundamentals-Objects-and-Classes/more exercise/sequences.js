function sortSequences(input) {

    let sortedInput = [];

    input.forEach(jsArr => {
        let arr = JSON.parse(jsArr).map(Number).sort((a, b) => b - a);
        sortedInput.push(arr)
    })
    let result = uniq(sortedInput).sort((a,b) =>a.length - b.length);

    function uniq(a) {
        var seen = {};
        return a.filter(function (item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    }

    for (const array of result) {
        console.log(array);
    }
}
sortSequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]
)