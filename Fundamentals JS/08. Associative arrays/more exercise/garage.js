function park(input) {
    let garages = {};
    for(let i = 0; i < input.length; i++){
        let line = input[i].split(' - ');
        let garageNr = line.shift();
        line = line.join('').split(', ')
        // console.log(line);//['color: blue', 'fuel type: diesel']
        let cars = [];
        if (!garages.hasOwnProperty(garageNr)){
            garages[garageNr] = [];
            garages[garageNr].push(line);
        }else{
            garages[garageNr].push(line);
        }
    };
garages = Object.entries(garages);
garages.forEach(garage => {
    console.log(`Garage № ${garage[0]}`);
    // console.log(garage[1]);
    garage[1].forEach(el =>{
        console.log(`--- ${el.join(', ').replace(/: /g, ' - ')}`);
    })
});
}
park([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
    //[
    // '1', [
    //     [ 'color: blue', 'fuel type: diesel' ],
    //     [ 'color: red', 'manufacture: Audi' ]
    //   ],
    //   '2', [ [ 'fuel type: petrol' ] ],
    //   '4', [ [ 'color: dark blue', 'fuel type: diesel', 'manufacture: Fiat' ] ]
    // ]