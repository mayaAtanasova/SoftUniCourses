function subSum(arr, start, end) {
    if (!Array.isArray(arr) ||
        arr.some(x => isNaN(x))) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    return arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
}