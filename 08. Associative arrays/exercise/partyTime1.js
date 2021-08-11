function partyTime(input) {
    let index = input.findIndex(x => x == 'PARTY');
    let vipGuestList = input.slice(0, index).filter(x => !isNaN(x[0]));
    let regGuestList = input.slice(0, index).filter(x => isNaN(x[0]));
    let comingGuests = input.slice(index + 1);

    comingGuests.forEach(guest => {
        if (vipGuestList.includes(guest)) {
            let id = vipGuestList.findIndex(x => x == guest);
            vipGuestList.splice(id, 1);
        }
        if (regGuestList.includes(guest)) {
            let id = regGuestList.findIndex(x => x == guest);
            regGuestList.splice(id, 1);
        }
    });
    let didNotCome = vipGuestList.concat(regGuestList);
    console.log(didNotCome.length);
    didNotCome.forEach(guest => {
        console.log(guest);
    })
}
partyTime(['7IK9Yo0h',
        '7IK9Yo0h',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc',
        'tSzE5t0p',
        'PARTY',
        '9NoBUajQ',
        'Ce8vwPmE',
        'SVQXQCbc'
    ]

)