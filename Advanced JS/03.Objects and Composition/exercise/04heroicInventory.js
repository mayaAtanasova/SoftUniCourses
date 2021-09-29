function createRegister(arr){
    let register = [];
    arr.forEach(line => {
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items != undefined ? items.split(', ') : [];
        let hero = {
            name,
            level,
            items
        };
        register.push(hero);
    });
    console.log(JSON.stringify(register));
}

createRegister(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);