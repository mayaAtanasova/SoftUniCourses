function book(input) {
    let studentsMap = new Map();
    input.forEach(line => {
        let grades = line.split(' ');
        let studentName = grades.shift();
        grades = grades.map(Number);
        if (studentsMap.has(studentName)) {
            let newGrades = studentsMap.get(studentName).concat(grades)
            studentsMap.set(studentName, newGrades);
        } else {
            studentsMap.set(studentName, grades);
        }
    });

    function avg(arr) {
        return arr.reduce((a, b) => a + b) / arr.length;
    }
    let sorted = Array.from(studentsMap).sort((a,b) => avg(a[1]) - avg(b[1]));
    for (const student of sorted) {
        console.log(`${student[0]}: ${student[1].join(', ')}`);
    }
}
book(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
])