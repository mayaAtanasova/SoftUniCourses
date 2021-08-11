function solve(input){
    let pattern = /(=|\/)(?<loc>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let points = 0;

    let match = pattern.exec(input);
    while (match != null){
        destinations.push(match.groups.loc);
        points += match.groups.loc.length;
        match = pattern.exec(input);
    }
console.log(`Destinations: ${destinations.join(', ')}`);
console.log(`Travel Points: ${points}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')