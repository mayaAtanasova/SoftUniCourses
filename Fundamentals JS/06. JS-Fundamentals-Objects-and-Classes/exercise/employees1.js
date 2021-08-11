function makeEmployee(input){

    for (let employee of input){
        let employeeData = {
        name: employee, 
        pin: employee.length
        }
        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.pin}`);
    }
}

makeEmployee([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])