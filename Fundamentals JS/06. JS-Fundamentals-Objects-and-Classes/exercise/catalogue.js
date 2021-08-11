function makeCatalogue(input) {

    let catalogueList = [];

    for (let el of input) {
        let name = el.split(' : ')[0];
        let price = el.split(' : ')[1];
        let product = {
            name,
            price
        };
        catalogueList.push(product);

    }

    catalogueList.sort((a, b) => a.name.localeCompare(b.name));


    let firstLetters = [];
    for (let product of catalogueList){
        if(firstLetters.indexOf(product.name[0]) === -1){
            firstLetters.push(product.name[0])
        }
    }

    for (let letter of firstLetters){
        console.log(letter);
        for (let product of catalogueList){
            if (product.name[0] == letter){
                console.log(`  ${product.name}: ${product.price}`);
            }
        }
    }
}



    makeCatalogue([
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ])