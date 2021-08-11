function solve(input) {
    //receive nr of pieses n
    let n = input.shift();
    let collection = {};
    //define object of commands
    let commands = {
        Add: add,
        Remove: remove,
        ChangeKey: chKey
    }
    //for n cycles collect the pieces in collection
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input[0].split('|');
        //- create object piece{composer:, key:}
        collection[piece] = {
            'composer': composer,
            'key': key
        };
        //move to next line
        input.shift();
    }

    //run a cycle throught the commands until 'Stop'
    while (input[0] != 'Stop') {
        let tokens = input[0].split('|');
        let command = tokens.shift();
        commands[command](...tokens);
        input.shift();
    }
    //define command functions
    function add(piece, composer, key) {
        //add piece to the collection
        if (collection.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        } else {
            collection[piece] = {
                'composer': composer,
                'key': key
            };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function remove(piece) {
        if (collection.hasOwnProperty(piece)) {
            console.log(`Successfully removed ${piece}!`);
            delete collection[piece];
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function chKey(piece, newKey) {
        if (collection.hasOwnProperty(piece)) {
            collection[piece]['key'] = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    //sort by piece name and by composer name
    //print sorted result
    let sorted = Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]) || a[1]['composer'].localeCompare(b[1]['composer']))
    .forEach(p =>{
        console.log(`${p[0]} -> Composer: ${p[1]['composer']}, Key: ${p[1]['key']}`);

    })

}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])