function partyTime(input) {
    let mapVIP = new Map();
    let mapReg = new Map();
    let index = input.findIndex(x => x == 'PARTY');
    let vipGuestList = input.slice(0, index).filter(x => !isNaN(x[0])).forEach(VIPguest => {
        mapVIP.set(VIPguest, 'invited');
    });
    let regGuestList = input.slice(0, index).filter(x => isNaN(x[0])).forEach(REGguest => {
        mapReg.set(REGguest, 'invited');
    });
    let comingGuests = input.slice(index+1);

    comingGuests.forEach(guest => {
        if(!isNaN(guest[0])){
            if (mapVIP.has(guest)){
                mapVIP.delete(guest);
            }
        }else{
            if(mapReg.has(guest)){
                mapReg.delete(guest);
            }
        }
    });
    let vipguests = Array.from(mapVIP);
    let regguests = Array.from(mapReg);
    let didNotCome = vipguests.concat(regguests);
    console.log(didNotCome.length);
    didNotCome.forEach(guest => {
        console.log(guest[0]);
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
])