function travel(input) {
    let trip = [];
    input.forEach(line => {
        let [countryName, town, cost] = line.split(' > ');
        cost = Number(cost);
        let country = {};

        if (trip.some(x => x.countryName == countryName)) {
            let index = trip.findIndex(x => x.countryName == countryName);
            if (!trip[index].towns.hasOwnProperty(town)) {
                trip[index].towns[town] = cost;
            } else {
                if (trip[index].towns[town] > cost) {
                    trip[index].towns[town] = cost;
                }
            }
        } else {
            country['towns'] = {};
            country['countryName'] = countryName;
            country.towns[town] = cost;
            trip.push(country);
        }
    });
    trip.sort((a, b) => a.countryName.localeCompare(b.countryName))
    // console.log(trip);
    trip.forEach(el => {
        let dest = Object.values(el);
        let sortedTowns = Object.entries(dest[0]).sort((a, b) => a[1] - b[1]).join(' ').split(',').join(' -> ');

        console.log(`${dest[1]} -> ${sortedTowns}`);
        // console.log(sortedTowns);

    })
}
travel([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10'
])