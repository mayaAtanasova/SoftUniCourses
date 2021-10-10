function processList(list){
    let result = [];

    const commands = {
        add: (str) => result.push(str),
        remove: (str) => result = result.filter(x => x != str),
        print: () => console.log(result.join(',')),
    };

    list.forEach(el => {
        const [command, item] = el.split(' ');
        commands[command](item);
    });
}

processList(['add pesho', 'add george', 'add peter', 'add peter', 'remove peter','print']);