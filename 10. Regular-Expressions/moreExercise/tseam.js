function play(input) {
    let account = input.shift().split(' ');
    let commands = {
        Install: install,
        Uninstall: uninstall,
        Update: update,
        Expansion: expansion,
    }
    while (input[0] != 'Play!') {
        let [command, game] = input[0].split(' ');
        account = commands[command](game);
        input.shift();
    }

    function install(game) {
        if (!account.includes(game)) {
            account.push(game);
        }
        return account;
    }

    function uninstall(game) {
        if (account.includes(game))
            account.splice(account.indexOf(game), 1);
        return account;
    }

    function update(game) {
        if (account.includes(game)) {
            account.splice(account.indexOf(game), 1);
            account.push(game);
        }
        return account;
    }

    function expansion(game) {
        [game, exp] = game.split('-');
        let newGame = game + ':' + exp;
        if (account.includes(game)) {
            account.splice(account.indexOf(game) + 1, 0, newGame);
        }
        return account;
    }

    console.log(account.join(' '));
}

play(['CS WoW Diablo',
        'Install LoL',
        'Uninstall WoW',
        'Update Diablo',
        'Expansion CS-Go',
        'Play!'
    ]

)