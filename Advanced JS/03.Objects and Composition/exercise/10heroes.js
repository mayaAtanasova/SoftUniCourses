function solve(){
    let result = {};

    result.fighter = (name) => {
        let heroState = {name, health: 100, stamina: 100};
        heroState.fight = () =>{
            console.log(`${heroState.name} slashes at the foe!`);
            heroState.stamina--;
        };
        return heroState;
    };
    
    
    result.mage = (name) => {
        let mageState = {name, health: 100, mana:100};
        mageState.cast = (spell) =>{
            console.log(`${mageState.name} cast ${spell}`);
            mageState.mana --;
        };
        return mageState;
    };

    return result;
}

let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');

const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
