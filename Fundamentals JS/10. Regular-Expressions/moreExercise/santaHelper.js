function help(input) {
    let key = input.shift();
    let decrypted = [];
    let kids = [];
    while (input[0] != 'end') {
        let encrypted = input[0];
        let message = String.fromCharCode(...encrypted.split('').map(x => x.charCodeAt(0) - key));
        decrypted.push(message);
        input.shift();
    }
    // console.log(decrypted); ['@Kate^jfdvbkrjgb!G!', '@Bobbie*kjdrrbgkT!G!', '@Stan#dkjghskd!N!']
    decrypted.forEach(message => {
        let pattern = /@(?<name>[A-Za-z]+)[^@\-!\:\>]+!(?<status>[GN])!/;
        if ( message.match(pattern)){
            let kid = message.match(pattern).groups;
            kids.push(kid);
        }
    })
    let filtered = kids.filter(x => x['status'] == 'G').forEach(kid =>{
        console.log(kid['name']);
    }); 
}

help([4,
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'
])