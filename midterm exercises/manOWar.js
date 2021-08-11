function manowar(input) {
    let pirateShipStatus = input.shift().split('>').map(Number);
    let warShipStatus = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let pirateSunken = false;
    let warshipSunken = false;

    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i].split(' ');
        if (commandLine == 'Retire') {
            break;
        } else {
            let command = commandLine.shift();
            commandLine.map(Number);
            if (command == 'Fire') {
                let index = commandLine[0];
                if (index >= 0 && index < warShipStatus.length) {
                    warShipStatus[index] -= commandLine[1];
                    if (warShipStatus[index] <= 0) {
                        warshipSunken = true;
                        console.log('You won! The enemy ship has sunken.');
                        break;
                    }
                }
            } else if (command == 'Defend') {
                let startIndex = commandLine[0];
                let endIndex = commandLine[1];
                if (startIndex >= 0 && startIndex < pirateShipStatus.length) {
                    if (endIndex >= 0 && endIndex < pirateShipStatus.length) {
                        for (let i = startIndex; i <= endIndex; i++) {
                            pirateShipStatus[i] -= commandLine[2];
                            if (pirateShipStatus[i] <= 0) {
                                pirateSunken = true;
                                console.log('You lost! The pirate ship has sunken.');
                                break;
                            }
                        }
                    }
                }

            } else if (command == 'Repair') {
                let index = commandLine[0];
                if (index >= 0 && index < warShipStatus.length) {
                    pirateShipStatus[index] += Number(commandLine[1]);
                    if (pirateShipStatus[index] >= maxHealth) {
                        pirateShipStatus[index] = maxHealth;
                    }
                }

            } else if (command == 'Status') {
                let status = pirateShipStatus.filter(x => x < maxHealth * 0.2);
                console.log(`${status.length} sections need repair.`);

            }
        }
    }
    if ((!warshipSunken && !pirateSunken)) {
    if ((warShipStatus.length != 0 && pirateShipStatus.length != 0)) {
            console.log(`Pirate ship status: ${sumArray(pirateShipStatus)}`);
            console.log(`Warship status: ${sumArray(warShipStatus)}`);
        }
    }

    function sumArray(array) {
        let sum = 0;
        for (el of array) {
            sum += el;
        }
        return sum
    }
}
manowar(['2>3>4>5>2',
    '6>7>8>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 11',
    'Repair 3 18',
    'Retire'
])