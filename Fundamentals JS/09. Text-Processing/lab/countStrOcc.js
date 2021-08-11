function countocc(str, word) {
    let count = str.split(' ').filter(x => x == word).length;
    console.log(count);
}

countocc(
    "This is a word and it also is a sentence",
    "is"
)