function makeInventory(input){
    let heroes = [];

for (let i = 0; i < input.length; i++){
    let commandLine = input[i].split(' / ');
    let heroName = commandLine.shift();
    let level = commandLine.shift();
    let items = commandLine[0].split(', ');
    items.sort();

    let myHero = {
        heroName,
        level,
        items
    }
    heroes.push(myHero);
}
heroes.sort((a,b) => (a.level - b.level))
for (let i = 0; i < heroes.length; i++){
    console.log(`Hero: ${heroes[i].heroName}
    level => ${heroes[i].level}
    items => ${heroes[i].items.join(', ')}`)
}
}
makeInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ])