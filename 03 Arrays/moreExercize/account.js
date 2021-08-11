function account(input) {
    let account = input.shift().split(' ');
    // console.log(account);
    for (let item of input) {
        let command = item.split(' ')[0];
        // console.log(command);
        let game = item.split(' ')[1];
        // console.log(game);
        if (command == 'Install') {
            account.push(game);
        } else if (command == 'Uninstall') {
            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
            }
        } else if (command == 'Update') {
            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
                account.push(game);
            }
        } else if (command == 'Expansion') {
            gameExp = game.split('-')[0];
            let expansion = game.split('-')[1];
            if (account.includes(gameExp)) {
                account.splice(account.indexOf(gameExp) + 1, 0, `${gameExp}:${expansion}`)
            }
        } else if (command == 'Play') {
            break;
        }
    }
    console.log(account.join(' '));
}


account(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)