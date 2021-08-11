function muOnline(input) {
    let health = 100;
    let bitCoins = 0;
    let dRooms = input.split('|');
    let bestRoom = 0;
    let defeated = false;

    for (let i = 0; i < dRooms.length; i++) {
        let [command, number] = dRooms[i].split(' ');
        number = Number(number);
        if (command == 'potion') {
            let hp = 0;
            if (health + number <= 100) {
                health += number;
                hp = number;
            } else {
                hp = 100 - health;
                health = 100;
            }
            console.log(`You healed for ${hp} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            console.log(`You found ${number} bitcoins.`);
            bitCoins += number;
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                defeated = true;
                bestRoom = i + 1;
                break;
            }
        }
    }
    if (defeated) {
        console.log(`Best room: ${bestRoom}`);
    } else {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitCoins}`);
        console.log(`Health: ${health}`);
    }

}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')