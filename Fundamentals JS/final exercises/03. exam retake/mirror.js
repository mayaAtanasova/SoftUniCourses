function solve(str) {
    //extract word pairs and store
    let store = [];
    let pattern = /(@|#)(?<w1>[A-Za-z]{3,})\1\1(?<w2>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(str);
    while (match != null) {
        store.push(match.groups);
        match = pattern.exec(str);
    }
    // console.log(store);
    //print valid pairs
    if (store.length == 0) {
        //-if no valid pairs log 'No word pairs found!' (store.length == 0)
        console.log('No word pairs found!');
    } else {
        //- if valid pairs found print count '{valid pairs count} word pairs found!'
        console.log((`${store.length} word pairs found!`));
    }
    //look for mirror words in store
    let filtered = store
    .map(x => Object.values(x))
    .filter(x => x[0] == revStr(x[1]))
    .map(x => x.join(' <=> '));
    if(filtered.length == 0){
        //- if no mirror words found print 'No mirror wirds!'
        console.log('No mirror words!');
    }else{
        //- if mirror words found print them in format
        console.log('The mirror words are:');
        console.log(filtered.join(', '));
    }
    function revStr(str){
        return str.split('').reverse().join('');
    }
}
solve('#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#')