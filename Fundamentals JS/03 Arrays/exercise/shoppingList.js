function shopping(input) {
    let list = input.shift().split('!')
    // console.log(list);
    input.pop();

    for (let line of input){
        let command = line.split(' ')[0];
        // console.log(command);
        let item = line.split(' ')[1];
        if (command == 'Urgent'){
            if (!list.includes(item)){
                list[0] = item;
        }
        }else if (command == 'Unnecessary'){
            if (list.includes(item)){
                list.splice(list.indexOf(item), 1);
        }
        }else if (command == 'Correct'){
            if (list.includes(item)){
                list[list.indexOf(item)] =  line.split(' ')[2];
            }
        }else if (command = 'Rearrange'){
            if (list.includes(item)){
                poppedItem = list.splice(list[indexOf(item)], 1);
                list.push(poppedItem);
            }
        }
    }
console.log(list.join(', '));
}

shopping(['Milk!Pepper!Salt!Water!Banana', 'Urgent Salt', 'Unnecessary Grapes', 
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'])