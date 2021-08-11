function hassh(text) {
    let result = text.split(' ').filter(x => x[0] == '#').map(x => x.slice(1)).filter(x => x.length != 0).filter(x => /^[a-z]+$/i.test(x))
    console.log(result.join('\n'));
}
    hassh('Nowadays everyone uses # to tag a #special word in #socialMedia')