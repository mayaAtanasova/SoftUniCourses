function inventorize(input) {
    let inventory = input.shift();
    inventory = inventory.split(', ');
    for (let i = 0; i < input.length; i++) {
        let [command, item] = input[i].split(' - ');
        if (command == "Craft!") {
            break;
        } else if (command == 'Collect') {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        } else if (command == 'Drop') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }
        } else if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1, 0, newItem);
            }
        } else if (command == 'Renew') {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
                inventory.push(item);
            }
        }
    }
    console.log(inventory.join(', '));
}

inventorize([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
])