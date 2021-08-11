function treasureChest(input) {
    let chest = input.shift().split('|');
    // console.log(chest);
    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine == 'Yohoho!') {
            break;
        } else {
            commandLine = commandLine.split(' ');
            let command = commandLine.shift();
            // console.log(command);
            if (command == 'Loot') {
                for (let j = 0; j < commandLine.length; j++) {
                    let item = commandLine[j];
                    if (chest.includes(item)) {
                        commandLine = commandLine.filter(x => x != item);
                    }
                }
                // chest.splice(0, 0, ...commandLine);
                while (commandLine.length > 0) {
                    tempItem = commandLine.shift();
                    chest.unshift(tempItem);
                }
            } else if (command == 'Drop') {
                let index = Number(commandLine[0]);
                // console.log(index);
                if (index >= 0 && index < chest.length) {
                    let droppedItem = chest[index];
                    chest.splice(index, 1);
                    chest.push(droppedItem);
                }
            } else if (command == 'Steal') {
                let count = Number(commandLine[0]);
                let stolenItems = chest.slice(-count);
                console.log(stolenItems.join(', '));
                chest.splice(chest.length - count, count);
            }
        }
    }
    if (chest.length != 0) {
        let arrayLengths = chest.map(x => x.length);
        // console.log(arrayLengths);
        let sum = 0;
        for (let i = 0; i < arrayLengths.length; i++) {
            sum += arrayLengths[i];
        }
        let avgGain = (sum / arrayLengths.length).toFixed(2);
        console.log(`Average treasure gain: ${avgGain} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}

treasureChest(['Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
])