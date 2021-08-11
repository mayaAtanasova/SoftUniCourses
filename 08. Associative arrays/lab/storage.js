function store(input){
    let map = new Map();
    for (const item of input) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);
        if (map.has(product)){
            let currentQty = map.get(product);
            let newQty = currentQty + quantity;
            map.set(product, newQty);
        }else{
            map.set(product, quantity);
        }
    }
    for (let kvp of map){
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
store(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)