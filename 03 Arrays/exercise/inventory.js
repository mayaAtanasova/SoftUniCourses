function inventory(input) {
    let inventory = input.shift().split(', ');
    for (let actions of input) {
        let command = actions.split(' - ')[0];
        let item = actions.split(' - ')[1];

        if (command == 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command == 'Drop') {
            if (inventory.includes(item)) {
                inventory.splice(inventory.indexOf(item), 1)
            }
        } else if (command == 'Combine Items') {
            let oldItem = item.split(':')[0];
            let newItem = item.split(':')[1];
            if (inventory.includes(oldItem)) {
                inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
            }
        } else if (command == 'Renew') {
            if (inventory.includes(item)) {
                let renewedItem = inventory.splice(inventory.indexOf(item), 1);
                inventory.push(renewedItem);
            }
        } else if (command == 'Craft!') {
            break;
        }
    }
    console.log(inventory.join(', '));
}


inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])