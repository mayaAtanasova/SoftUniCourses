function makeAddrBook(input) {
    let addressBook = {};
    input.forEach(element => {
        let [name, address] = element.split(':');
        addressBook[name] = address;
    });

    let entries = Object.entries(addressBook);
    let sorted = entries.sort((a,b) => a[0].localeCompare(b[0]));
    
    sorted.forEach(person =>{
        console.log(`${person[0]} -> ${person[1]}`);
    })
}
makeAddrBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
])