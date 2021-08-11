function inventory(input){
    let inventoryList = input.shift().split(' ');

    for (let i = 0; i < input.length; i++){
        let [command, item] = input[i].split(' ')
        if (command == 'Buy'){
            if (!inventoryList.includes(item)){
                inventoryList.push(item);
            }
        }else if(command == 'Trash'){
            if (inventoryList.includes(item)){
                let index = inventoryList.indexOf(item);
                inventoryList.splice(index, 1);
            }
        }else if(command == 'Repair'){
            if (inventoryList.includes(item)){
                let index = inventoryList.indexOf(item);
                inventoryList.splice(index, 1);
                inventoryList.push(item);
            }
        }else if(command == 'Upgrade'){
            let [equipment, action] = item.split('-');
            if(inventoryList.includes(equipment)){
                let index = inventoryList.indexOf(equipment);
                inventoryList.splice(index+1, 0, `${equipment}:${action}`);
            }
        }
        
    }
    console.log(inventoryList.join(' '));
}
inventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)