function shopping(input){
let shoppingList = input.shift().split('!');
//commands until 'Go Shopping'
for(let i = 0; i < input.length; i++){
    let commandLine = input[i];
    if (commandLine !== 'Go Shopping'){
        let [command, item, newItem] = commandLine.split(' ');
        //if command is Urgent - - add the item at the start of the list. 
        // If the item already exists, skip this command.
        if(command === 'Urgent'){
            if(!shoppingList.includes(item)){
                shoppingList.unshift(item);
            }
        }
        //if command is Unnecessary -remove the item with the given name, 
        //only if it exists in the list. Otherwise skip this command.
        if(command === 'Unnecessary'){
            if(shoppingList.includes(item)){
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1);
            }
        }
        //if command is Correct - if the item 
        // name exists, change its name with the new one. If it doesn't exist, skip this command.
        if(command === 'Correct'){
                if(shoppingList.includes(item)){
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1, newItem);
            }
        }
        //if command is Rearrange - - if the grocery exists in the list, remove 
        //it from its current position and add it at the end of the list.
        if(command === 'Rearrange'){
            if(shoppingList.includes(item)){
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1);
                shoppingList.push(item);
            }
        }
    }else{
        break;
    }
}
//print the result:
console.log(shoppingList.join(', '));
}

shopping(['Milk!Milk',
    'Urgent Salt',
    'Unnecessary Milk', 
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
    ])