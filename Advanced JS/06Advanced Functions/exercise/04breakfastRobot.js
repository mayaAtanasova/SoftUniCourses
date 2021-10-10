function solution(){

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    const recipes = {
        apple: {carbohydrate:1, flavour:2},
        lemonade: {carbohydrate:10, flavour:20},
        burger: {carbohydrate:5, fat:7, flavour:3},
        eggs:{protein:5, fat:1, flavour:1},
        turkey: {protein:10, carbohydrate:10, fat:10, flavour:10},
    };

    const commands = {
        restock: (microelement, qty) => {
            stock[microelement] += qty;
            return 'Success';
        },
        prepare: (recipe, qty) =>{
            let supplies = Object.entries(recipes[recipe]);
            let msg = 'Success';
            for (let item of supplies){
                let [elt, qtyNeeded] = item;
                stock[elt] -= qty * qtyNeeded;
                if (stock[elt] < 0){
                    msg = `Error: not enough ${elt} in stock`;
                    stock[elt] += qty * qtyNeeded;
                    break;
                }
            };
            return msg;
        },
        report: () => {
            return Object.entries(stock).map(x => x.join('=')).join(' ');
        },
    };
    return (order) => {
        let [command, item, qty] = order.split(' ');
        qty = Number(qty);
        let result = commands[command](item, qty);
        return result;
    };
}

let manager = solution (); 
console.log (manager ('restock flavour 50'));
console.log (manager ('prepare lemonade 4')); 
console.log (manager ('restock carbohydrate 10')); 
console.log (manager ('restock flavour 10')); 
console.log (manager ('prepare apple 1')); 
console.log (manager ('restock fat 10'));
console.log (manager ('prepare burger 1')); 
console.log (manager ('report')); 




