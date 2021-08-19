function addremove(commands) {
    let n = 1;
    let result = [];
    let actions = {
        add: (n) => result.push(n),
        remove: () => result.pop(),
    }
    commands.forEach(command => {
        actions[command](n);
        n++;
    })
    result.length > 0
        ? console.log(result.join('\n'))
        : console.log('Empty');
}

addremove([

    'remove',
    'remove',
    'remove',
]

)