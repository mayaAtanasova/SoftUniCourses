function getLetters (arr) {
    let letters = [];

    arr.forEach(function(item) {
        if(letters.indexOf(item.title[0].toUpperCase()) === -1) {
            letters.push(item.title[0].toUpperCase());
        }
    });

    console.log(letters);
};

getLetters([{title:"Apple"},{title:"Avocado"},{title:"Banana"},{title:"Cucumber"}]);