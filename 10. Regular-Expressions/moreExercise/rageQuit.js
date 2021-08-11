function rage(input) {
    let pairs = [];
    let unique = new Set();
    let result = '';
    let pattern = /(?<str>[^\d]+)(?<nr>\d{1,2})/g;
    let match = pattern.exec(input);
    while (match != null) {
        pairs.push(match.groups)
        match = pattern.exec(input);
    }
    // console.log(1);
    pairs.forEach(pair =>{
        let upper = pair['str'].toUpperCase();
        let count = Number(pair['nr']);
        result += upper.repeat(count);
        
    })
    let symbols = result.split('').forEach(unique.add, unique);
    console.log(`Unique symbols used: ${unique.size}`);
    console.log(result);
}

rage('aSd2&5s@0')