function dark(inputArr) {
    let str = inputArr[0];
    let arr = str.split("|");
    let health = 100;
    let coins = 0;
    let isDead = false;
    // console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let roomContent = arr[i].split(' ');
        // console.log(roomContent);
        let item = roomContent[0];
        let value = Number(roomContent[1]);
        if (item == 'potion') {
            if (health >= 100) {
                health = 100;
            } else {
                health += value;
                if (health >= 100){
                    console.log(`You healed for ${value - health + 100} hp.`);
                    health = 100;
                }else{
                    console.log(`You healed for ${value} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            }
        }else if(item == 'chest'){
            coins += value;
            console.log(`You found ${value} bitcoins.`);
        }else{
            health -= value;
            if(health > 0){
                console.log(`You slayed ${item}.`);
            }else{
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                isDead = true;
                break;
            }
        }
    }
    if (isDead == false){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])