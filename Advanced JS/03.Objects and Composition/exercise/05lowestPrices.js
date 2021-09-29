function findLowestPrice(arr) {
    const products = {};

    arr.forEach(line => {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        products[product] = { ...products[product], [town]: price };
    });
    let result = Object.entries(products).map(smallestPrice).join('\n');

    function smallestPrice(array){
        let smallest = Object.entries(array[1]).sort((a,b) => a[1] - b[1]).shift();
        array[1] = `${smallest[1]} (${smallest[0]})`;
        return array.join(' -> ');
    }
    console.log(result);
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
);