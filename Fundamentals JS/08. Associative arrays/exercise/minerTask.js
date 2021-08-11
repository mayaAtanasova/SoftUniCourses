function mine(input) {
    let inventory = [];
    for (let i = 0; i < input.length; i += 2) {
        let type = input[i];
        let quantity = Number(input[i + 1]);
        if (!inventory.some(x => x.type == type)) {
            let resource = {};
            resource['type'] = type;
            resource['quantity'] = quantity;
            inventory.push(resource);
        } else {
            inventory[inventory.findIndex(x => x.type == type)].quantity += quantity;
        }
    }
    inventory.forEach(res => {
        console.log(`${res.type} -> ${res.quantity}`);
    })
}
mine([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
])