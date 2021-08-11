function solve(input) {
    let n = input.shift();
    let catalogue = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[0].split('<->');
        catalogue[plant] = {
            'rarity': Number(rarity),
            'ratings': [],
        }
        input.shift();
    }
    let commands = {
        Rate: rate,
        Update: update,
        Reset: reset
    }
    while (input[0] != 'Exhibition') {
        let tokens = input[0].split(': ');
        let command = tokens.shift();
        let params = tokens[0].split(' - ');
        commands[command](...params);
        input.shift();
    }

    function rate(plant, rating) {
        rating = Number(rating)
        if (catalogue.hasOwnProperty(plant)) {
            catalogue[plant]['ratings'].push(rating);
        } else {
            console.log('error');
        }
    }

    function update(plant, new_rarity) {
        if (catalogue.hasOwnProperty(plant)) {
            catalogue[plant]['rarity'] = Number(new_rarity);
        } else {
            console.log('error');
        }
    }

    function reset(plant) {
        if (catalogue.hasOwnProperty(plant)) {
            catalogue[plant]['ratings'].length = 0;
        } else {
            console.log('error');
        }
    }

    function avg(array) {
        let result
        if (array.length != 0) {
            result = array.reduce((a, b) => a + b, 0) / array.length;
        } else {
            result = 0;
        }
        return result;
    }
    console.log('Plants for the exhibition:');
    let sorted = Object.entries(catalogue)
        .sort((a, b) => b[1]['rarity'] - a[1]['rarity'] || avg(b[1]['ratings']) - avg(a[1]['ratings']))
        .forEach(p => {
            console.log(`- ${p[0]}; Rarity: ${p[1]['rarity']}; Rating: ${(avg(p[1]['ratings']).toFixed(2))}`);
        })
}
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
])