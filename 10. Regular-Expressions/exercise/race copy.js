function solve(input) {
    let ppl = input.shift().split(', ');
    let patternName = /[A-Za-z]/g;
    let patternNumbers = /\d/g;
    let race = {};
    let line = input.shift();
    while (line != "end of race") {
        let name = line.match(patternName).join('');
        let distance = line.match(patternNumbers).map(Number).reduce((a,b) => a+b);
        
        if (ppl.includes(name)) {
            if (!race.hasOwnProperty(name)) {
                race[name] = distance;
            } else {
                race[name] += distance;
            }
        }
        line = input.shift();
    }
    let sorted = Object.entries(race).sort((a, b) => b[1] - a[1]).splice(0, 3);

    console.log(`1st place: ${sorted[0][0]}
        2nd place: ${sorted[1][0]}
        3rd place: ${sorted[2][0]}`);
}

solve(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
])