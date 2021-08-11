function play(input) {
    let n = input.shift();
    let party = {};
    for (let i = 0; i < n; i++) {
        let [heroName, hp, mp] = input.shift().split(' ');
        party[heroName] = {hp: Number(hp), mp: Number(mp)};
    }
    let commands = {
        CastSpell: cast,
        TakeDamage: takeDmg,
        Recharge: rech,
        Heal: heal,
    }
    while (input[0] != 'End') {
        let tokens = input[0].split(' - ');
        let command = tokens.shift();
        commands[command](...tokens);
        input.shift();
    }
    function cast(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        let mpAvailable = party[heroName]['mp'];
        if (mpNeeded <= mpAvailable) {
            mpAvailable -= mpNeeded;
            party[heroName]['mp'] = mpAvailable;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${mpAvailable} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    }

    function takeDmg(heroName, dmg, attacker) {
        let currentHP = party[heroName]['hp'] -= Number(dmg);
        if (currentHP > 0) {
            console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${currentHP} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete party[heroName];
        }
    }

    function rech(heroName, amount) {
        amount = Number(amount);
        let diff;
        let mpAvailable = party[heroName]['mp'];
        if (mpAvailable + amount > 200) {
            diff = 200 - mpAvailable;
            party[heroName]['mp'] = 200;
        } else {
            diff = amount;
            party[heroName]['mp'] += amount;
        }
        console.log(`${heroName} recharged for ${diff} MP!`);
    }

    function heal(heroName, amount) {
        amount = Number(amount);
        let diff;
        let hpAvailable = party[heroName]['hp'];
        if (hpAvailable + amount > 100) {
            diff = 100 - hpAvailable;
            party[heroName]['hp'] = 100;
        } else {
            diff = amount;
            party[heroName]['hp'] += amount;
        }
        console.log(`${heroName} healed for ${diff} HP!`);
    }
    //sort party by HP in descending and name in ascendin order
    let sorted = Object.entries(party)
        .sort((a, b) => b[1]['hp'] - a[1]['hp'] || a[0].localeCompareb[0])
        .forEach(hero => {
            //print detials
            console.log(`${hero[0]}`);
            console.log(`  HP: ${hero[1]['hp']}`);
            console.log(`  MP: ${hero[1]['mp']}`);
        });
}

play(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
])