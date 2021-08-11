function fight(str) {
    let namePat = /(?<name>[^, ]+)/g
    let demonNames = [];
    let matchedNames = namePat.exec(str);
    while (matchedNames != null) {
        demonNames.push(...Object.values(matchedNames.groups))
        matchedNames = namePat.exec(str);
    }
    demonNames.sort((a, b) => a.localeCompare(b));
    // console.log(1);
    let demons = {};
    demonNames.forEach(name => {
        let health = 0;
        for (let i = 0; i < name.length; i++) {
            if (/[^0-9\+\-\*\/\.]/.test(name[i])) {
                health += name.charCodeAt(i);
            }
        }
        demons[name] = {};
        demons[name]['health'] = health;
        let damage = 0;
        let pattern = /(?<nrs>\+*\-*\d\.*\d*)/g;
        let match = pattern.exec(name);
        while (match != null) {
            damage += Number(...Object.values(match.groups))
            match = pattern.exec(name);
        }
        let newPat = /(?<sign>\*|\/)/g;
        let newMatch = newPat.exec(name);
        while (newMatch != null) {
            let sign = Object.values(newMatch.groups)[0];
            if (sign == '*') {
                damage *= 2;
            } else if (sign == '/') {
                damage /= 2;
            }
            newMatch = newPat.exec(name);
        }
        demons[name]['damage'] = damage;
    })
    let arr = Object.entries(demons).forEach(d =>{
        console.log(`${d[0]} - ${d[1]['health']} health, ${d[1]['damage'].toFixed(2)} damage`);

    })
}


fight('Gos/ho')