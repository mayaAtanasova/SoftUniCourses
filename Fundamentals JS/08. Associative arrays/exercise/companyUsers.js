function employeetracker(input) {
    let companies = [];
    input.forEach(line => {
        let [companyName, employeeId] = line.split(' -> ');
        if (!companies.some(x => x.companyName == companyName)) {
            let company = {};
            let setEmps = new Set();
            setEmps.add(employeeId);
            company['companyName'] = companyName;
            company['employees'] = setEmps;
            companies.push(company);
        } else {
            companies[companies.findIndex(x => x.companyName == companyName)].employees.add(employeeId);
        }
    });
    let sortedComps = companies.sort((a, b) => a.companyName.localeCompare(b.companyName)).forEach(c => {
        console.log(c.companyName);
        empls = Array.from(c.employees).map(el => '-- ' + el);
        console.log(empls.join('\n'));
    })
}
employeetracker([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])