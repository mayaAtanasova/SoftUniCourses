function flightSchedule(input) {
    let flightsArr = [];
    let [flights, status, toPrint] = input;
    for (let flight of flights) {
        flight = flight.split(' ');
        let flightNr = flight.shift();
        let Destination = flight.shift(' ');
        let flightObj = {
            flightNr,
            Destination,
        }
        flightObj.Status = 'Ready to fly';
        flightsArr.push(flightObj);
    }
    for (let flt of status) {
        let fltNr = flt.split(' ').shift();
        let id = flightsArr.findIndex(x => x.flightNr == fltNr);
        if (id != -1) {
            flightsArr[id].Status = 'Cancelled'
        }
    }
    for (let flight of flightsArr) {
        if (flight.Status == toPrint[0]) {
            delete flight.flightNr;
            console.log(flight);
        }
        
    }

}
flightSchedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
])