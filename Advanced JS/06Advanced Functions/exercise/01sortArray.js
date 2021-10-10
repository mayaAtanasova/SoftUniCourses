function sortArray(arr, dir) {

    const map = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };
    return arr.sort(map[dir]);
}