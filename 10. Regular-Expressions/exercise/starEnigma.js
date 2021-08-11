function solve(input) {
    let n = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let key = 0;
    input.forEach(line => {
        for (let i = 0; i <= line.length; i++) {
            if (/[STARstar]/.test(line[i])) {
                key++;
            }
        }
        let decrypted = '';
        for (let i = 0; i <= line.length; i++) {
            decrypted += String.fromCharCode(line.charCodeAt(i) - key);
        }
        // console.log(decrypted);
        key = 0;
        let patt = /@(?<planet>[A-Z-a-z]+)([^@\-!:>]*):(?<ppl>\d+)\2*!(?<attack>[AD])!\2*->(?<soldCount>\d+)/
        let match = patt.exec(decrypted);
        if(match != null){
            let [planet, ppl, attack, soldiers] = Object.values(match.groups);
            if (attack == 'A') {
                attackedPlanets.push(planet);
            }
            if (attack == 'D') {
                destroyedPlanets.push(planet);
            }
        }
    })
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.sort((a,b) => a.localeCompare(b)).forEach(pl => {
        console.log(`-> ${pl}`);
    })
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.sort((a,b) => a.localeCompare(b)).forEach(pl => {
        console.log(`-> ${pl}`);
    })
}


solve(["3",
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    "GQhrr|A977777(H(TTTT", "EHfsytsnhf?8555&I&2C9555SR"
])