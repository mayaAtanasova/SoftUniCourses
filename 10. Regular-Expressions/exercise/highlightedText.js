function designerPdfViewer(h, word) {
    let abt = 'abcdefghijklmnopqrstuvwxyz';
    let tallest = 0;
    for (let i = 0; i < word.length; i++) {
        let index = abt.indexOf(word[i]);
        if (h[index] > tallest) {
            tallest = h[index]
        }
    }
    return tallest * word.length;
}
designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    'abc')