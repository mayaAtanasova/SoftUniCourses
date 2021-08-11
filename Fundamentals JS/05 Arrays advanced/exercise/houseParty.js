function party(input){
let guestList = [];
for (let command of input){
    let guestName = command.split(' ').shift();
    if(command.includes('not')){
        if(guestList.includes(guestName)){
            guestList = guestList.filter(person => person != guestName);
        }else{
            console.log(`${guestName} is not in the list!`);
        }
    }else{
        if(guestList.includes(guestName)){
            console.log(`${guestName} is already in the list!`);
        }else{
            guestList.push(guestName);
        }
    }
}
console.log(guestList.join('\n'));
}
party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)