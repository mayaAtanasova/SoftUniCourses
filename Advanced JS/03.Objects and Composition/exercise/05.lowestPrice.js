function findLowestPrice(arr){
    let productCatalogue = {};
    arr.forEach(el => {
        let [town, product, price] = el.split(' | ').map(x => isNaN(x) ? x : Number(x));
        if (!productCatalogue.hasOwnProperty(product)){
            productCatalogue[product] = {};
        }
        productCatalogue[product][town] = price;
    })
    for (let [key, value] of Object.entries(productCatalogue)){
        let sorted = Object.entries(value).sort((a,b) => a[1] - b[1]);
        console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }
}

findLowestPrice(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']
)