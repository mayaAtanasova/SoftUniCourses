function makeCatalogue(arr) {
    let catalogue = {};
    arr.forEach(el => {
        let [product, price] = el.split(' : ').map(x => isNaN(x) ? x : Number(x));
        catalogue[product] = price;
    });
    let sorted = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = sorted[0][0][0];
    console.log(firstLetter);
    sorted.forEach(el => {  
        if(el[0][0] == firstLetter){
            console.log(`  ${el[0]}: ${el[1]}`);
        }else{
            firstLetter = el[0][0];
            console.log(firstLetter);
            console.log(`  ${el[0]}: ${el[1]}`);
        }
    });
}