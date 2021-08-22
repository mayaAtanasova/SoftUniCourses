function manufacture(library, orders) {
    let fulfilled = [];
    orders.forEach(order => {
        let myObj = {};
        let {template:{name}, parts} = order;
        myObj.name = name;
        parts.forEach(action => {
            myObj[action] = library[action];
        })
        fulfilled.push(myObj);
    })
    return fulfilled;
}

manufacture(
    {
        print: function () {
            console.log(`${this.name} is printing a page`);
        },
        scan: function () {
            console.log(`${this.name} is scanning a document`);
        },
        play: function (artist, track) {
            console.log(`${this.name} is playing '${track}' by ${artist}`);
        },
    },
    [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
    ])