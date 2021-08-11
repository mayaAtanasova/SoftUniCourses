function hunt(treasure) {
    let loot = treasure.shift().split('|');
    for (let i = 0; i < treasure.length; i++) {
        let tokens = treasure[i];
        if (tokens == 'Yohoho!') {
            break;
        } else {
            tokens = tokens.split(' ');
            let command = tokens.shift();
            if (command == 'Loot') {
                let items = tokens;
                for (let item of items) {
                    if (loot.indexOf(item) == -1) {
                        loot.unshift(item);
                    }
                }
            } else if (command == 'Drop') {
                let index = Number(tokens);
                if (index >= 0 && index < loot.length) {
                    let temp = loot[index];
                    loot.splice(index, 1);
                    loot.push(temp);
                }
            } else if (command == 'Steal') {
                let n = Number(tokens);
                let stolen = loot.slice(Math.min(loot.length, -n))
                console.log(stolen.join(', '));
                loot.splice(Math.max(loot.length - n, 0));
            }
        }
    }
    if (loot.length != 0) {
        let sum = 0;
        for (let item of loot) {
            sum += item.length;
        }
        let averageGain = (sum / loot.length).toFixed(2);
        console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
hunt([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
])