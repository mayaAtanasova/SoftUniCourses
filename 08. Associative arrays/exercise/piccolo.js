function pick(input){
let map = new Map();

input.forEach(line => {
    let [direction, carNumber] = line.split(', ');
    if (direction == 'IN'){
        if(!map.has(carNumber)){
            map.set(carNumber,1);
        }
    }
    if(direction == 'OUT'){
        if(map.has(carNumber)){
            map.delete(carNumber);
        }
    }
})
let sorted = Array.from(map).sort((a,b) => a[0].localeCompare(b[0])).forEach(car => {
    console.log(car[0]);
})
}
pick(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)