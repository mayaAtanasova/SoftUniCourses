function employeeMaker(input){
    class Employee{
        constructor(name){
            this.name = name;
        }
    }
    for (let i = 0; i < input.length; i++){
        let name = input[i];
        let employee = new Employee(name);
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.name.length}`);
    }

}

employeeMaker([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )