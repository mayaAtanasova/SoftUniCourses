function manowar(input) {
    let pirate = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxCapacity = input.shift().split('>').map(Number);
    let pirateDown = false;
    let warshipDown = false;

    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i];
        if (commandLine == 'Retire') {
            break;
        } else {
            commandLine = commandLine.split(' ');
            let command = commandLine.shift();
            if (command == 'Fire') {
                let [index, damage] = commandLine.map(Number);
                if (index >= 0 && index < warship.length) {
                    warship[index] -= damage;
                    if (warship[index] <= 0) {
                        warshipDown = true;
                        console.log('You won! The enemy ship has sunken.');
                    break;
                    }
                }
            } if (command == 'Defend') {
                let [startIndex, endIndex, damage] = commandLine.map(Number);
                if (startIndex >= 0 
                    // &&
                    // startIndex < pirate.length &&
                    // endIndex >= 0 
                    &&
                    endIndex < pirate.length) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirate[j] -= damage;
                        if (pirate[j] <= 0) {
                            pirateDown = true;
                            console.log('You lost! The pirate ship has sunken.');
                            break;
                        }
                    }
                }

            } if (command == 'Repair') {
                let [index, health] = commandLine.map(Number);
                if (index >= 0 && index < pirate.length) {
                    pirate[index] += health;
                    if (pirate[index] >= maxCapacity) {
                        pirate[index] = maxCapacity;
                    }
                }
            } if (command == 'Status') {
                let count = 0;
                for (let k = 0; k <= pirate.length; k++) {
                    if (pirate[k] < maxCapacity * 0.2) {
                        count++
                    }
                }
                console.log(`${count} sections need repair.`);
            }
        }
    }
    if (!pirateDown && !warshipDown) {
        console.log(`Pirate ship status: ${pirate.reduce((a,b) => a+b)}
        Warship status: ${warship.reduce((a,b) => a+b)}`);
    }
}
manowar([
    '2>3>4>5>2',
    '6>7>3>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
])