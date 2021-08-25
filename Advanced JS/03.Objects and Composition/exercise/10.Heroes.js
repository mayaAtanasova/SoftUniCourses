function solve(){
    let result = {};
    result.mage = (name) => {
        result.mage = {};
        result.mage.name = name;
        result.mage.health = 100;
        result.mage.mana = 100;
        result.mage.cast = (spell) => {
            result.mage.mana -= 1;
            console.log(`${result.mage.name} cast ${spell}`);
        }
        return result.mage;
    }
    result.fighter = (name) => {
        result.fighter = {};
        result.fighter.name = name;
        result.fighter.health = 100;
        result.fighter.stamina = 100;
        result.fighter.fight = () => {
            result.fighter.stamina -= 1;
            console.log(`${result.fighter.name} slashes at the foe`);
        }
        return result.fighter;
    }
    return result;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
