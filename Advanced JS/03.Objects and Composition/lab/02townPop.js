function townRegister(arr) {
    let register = { };
    arr.forEach(line => {
        let [town, population] = line.split(' <-> ');
        population = Number(population);
        if (register.hasOwnProperty(town)) {
            register[town] += population;
        } else {
            register[town] = population;
        }
    })
    for (let town in register){
        console.log(`${town} : ${register[town]}`);
    }
}

townRegister(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)