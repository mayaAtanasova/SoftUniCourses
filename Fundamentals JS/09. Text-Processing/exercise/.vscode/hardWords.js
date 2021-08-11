function completing(input) {
    let letter = input[0].split(' ');
    let words = input[1];
    for (let i = 0; i < letter.length; i++) {
        let word = letter[i]
        if (word.includes('_')) {
            let temp = '';
            if (word[word.length - 1] != '_') {
                temp = word.slice(-1);
                word = word.slice(0, -1);
            }
            let search = '_'.repeat(word.length);
            let replacement = words[words.findIndex(x => x.length == search.length)] + temp;
            letter.splice(i, 1, replacement);
        }
    }
    console.log(letter.join(' '));
}

completing(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
])