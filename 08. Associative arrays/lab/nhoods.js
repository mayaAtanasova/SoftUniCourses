function live(input) {
    let nhoods = input.shift().split(', ');

    let map = new Map();
    nhoods.forEach(nhood => {
        map.set(nhood, []);
    });

    input.forEach(line => {
        let [nhood, person] = line.split(' - ');
        if (nhoods.includes(nhood)) {
            if (map.has(nhood)) {
                let inhabitants = map.get(nhood);
                inhabitants.push(person);
            } else {
                map.set(nhood, []);
                let inhabitants = map.get(nhood);
                inhabitants.push(person);
            }
        }
    });
    let sorted = Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length).forEach(el => {
        console.log(`${el[0]}: ${el[1].length}`);
        if (el[1].length > 0){
            el[1].forEach(person =>{
                console.log(`--${person}`);
            })
        }
    });
}

live(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
])