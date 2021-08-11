function pirate(input) {
    //receive cities until Sail
    let targets = {};
    let line = input[0];
    while (line != 'Sail') {
        [town, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);
        //if town is not present
        if (!targets.hasOwnProperty(town)) {
            targets[town] = {};
            targets[town]['population'] = population;
            targets[town]['gold'] = gold;
        } else {
            targets[town]['population'] += population;
            targets[town]['gold'] += gold;
        }
        input.shift();
        line = input[0];
    }
    input.shift();
    //receive commands until end
    let commands = input[0];
    while (commands != 'End') {
        let [command, town, t1, t2] = commands.split('=>');
        t1 = Number(t1);
        t2 = Number(t2);
        if (command == 'Plunder') {
            targets[town]['population'] -= t1;
            targets[town]['gold'] -= t2;
            console.log(`${town} plundered! ${t2} gold stolen, ${t1} citizens killed.`);
            if (targets[town]['population'] == 0 || targets[town]['gold'] == 0) {
                delete targets[town];
                console.log(`${town} has been wiped off the map!`);
            }
        }
        if (command == 'Prosper') {
            if (t1 < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                targets[town]['gold'] += t1;
                console.log(`${t1} gold added to the city treasury. ${town} now has ${targets[town]['gold']} gold.`);
            }
        }
        input.shift();
        commands = input[0];
    }
    let sorted = Object.entries(targets).sort((a, b) => b[1]['gold'] - a[1]['gold'] || a[0].localeCompare(b[0]));
    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.forEach(town => {
            console.log(`${town[0]} -> Population: ${town[1]['population']} citizens, Gold: ${town[1]['gold']} kg`);
        });
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirate([
    "Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
])