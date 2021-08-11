function solve(input) {
let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+\.*\d*)!(?<qty>\d+)/;
let furniture = [];
let totCost = 0;
let line = input.shift();
while(line != 'Purchase'){
    if (pattern.test(line)){
        let tokens = pattern.exec(line);
        let [type, price, qty] = Object.values(tokens.groups);
        furniture.push(type);
        totCost += Number(price)*Number(qty);
    }
    line = input.shift();
}
console.log('Bought furniture:');
furniture.forEach(el =>{
    console.log(el);
});
console.log(`Total money spend: ${totCost.toFixed(2)}`);
}

solve([
    ">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">>table<<3010!1",
    ">Invalid<<!5",
    "Purchase"
])