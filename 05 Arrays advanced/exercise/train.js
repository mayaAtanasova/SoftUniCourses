function train(input){
    let wagons = input.shift().split(' ').map(Number);
    let maxCapacity = Number(input.shift());
    for (let i = 0; i < input.length; i++){
        let commands = input[i].split(' ');
        if(commands.length == 2){
            passengers = Number(commands[1]);
            wagons.push(passengers);
        }else{
            passengers = Number(commands[0]);
            for (let i = 0; i < wagons.length; i++){
                if (wagons[i] + passengers <= maxCapacity){
                    wagons[i] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)