function solve([input]) {
    let store = [];
    let totalCals = 0;
    let pattern = /(\||#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g
    //extract food info
    let match = pattern.exec(input);
    while (match != null) {
        //populate store
        let product = {
            ...match.groups
        };
        store.push(product);
        totalCals += Number(product.cal);
        match = pattern.exec(input)
    }
    
    //calculate total calories & determine days @ 2000kcal/day
    let daysToGo = Math.floor(totalCals/2000);
    //print days
    console.log(`You have food to last you for: ${daysToGo} days!`)
    //print output for each item
    store.forEach(product => {
        console.log(`Item: ${product.name}, Best before: ${product.date}, Nutrition: ${product.cal}`);
    })

}

solve(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);