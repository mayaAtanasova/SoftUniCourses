function counterStrike(input) {
let energy = Number(input.shift());
// console.log(input);
let count = 0;
for (let i = 0; i < input.length; i++){
    if(input[i] == 'End of battle'){
        console.log(`Won battles: ${count}. Energy left: ${energy}`);
        break;
    }
    if (energy < Number(input[i])){
        console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
        break;
    }else{
        count++;
        energy -= (input[i]);
        if (count % 3 == 0){
            energy += count;
        }
    }
}
}
counterStrike([
    '200', '54', '14',
    '28', '13', 'End of battle'
])