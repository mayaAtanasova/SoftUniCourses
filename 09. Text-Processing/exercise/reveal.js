function revealWords(words, str){
    let wordsArr = words.split(', ');
    wordsArr.forEach(w => {
        let searchString = '*'.repeat(w.length);
        str = str.replace(searchString, w);
    })
console.log(str);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
)