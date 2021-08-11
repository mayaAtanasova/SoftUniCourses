function addRemove(commands){
    let result = [];
    for (let i = 1; i <= commands.length; i++){
        if (commands[i-1] == 'add'){
            result.push(i);
        }else if(commands[i-1] == 'remove'){
            result.pop(i);
        }
    }
    if (result.length === 0){
        console.log('Empty');
    }else{
    console.log(result.join(' '));
    }
}

addRemove(['remove', 'remove', 'remove'])