function flightSchedule(input){
    let [flights, statuses, wantedStatus] = input;
    let result = {};
    flights.forEach(x =>{
        let [flightNr, dest] = x.split(' ');
        result.flightNr = flightNr;
        result.Destination = dest;
        result.Status = 'Ready to fly';
    })

    // statuses.forEach(x =>{
    //     let [flightNr, status] = x.split(' ');
    //     let id = Object.entries(result).findIndex()
    //     if (result[flightNr] == flightNr){
    //         result[flightNr].status = status;
    //     }
    // })
    console.log(result);
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