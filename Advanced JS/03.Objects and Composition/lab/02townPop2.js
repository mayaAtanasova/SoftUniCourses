function townRegister(arr) {
    let result = arr.reduce((acc, c) => {
        const [town, pop] = c.split(' <-> ').map(x => isNaN(x) ? x : Number(x));
        acc[town] != undefined ? acc[town] += pop : acc[town] = pop;
        return acc;
    }, {})
    for (let town in result){
        console.log(`${town} : ${result[town]}`);
    }
}

townRegister(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)