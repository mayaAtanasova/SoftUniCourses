function makeRegister(input) {
    let register = [];

    input.forEach(el => {
        el = el.split(', ');
        let studentName = el[0].split(': ')[1];
        let grade = Number(el[1].split(': ')[1]);
        let gpa = Number(el[2].split(': ')[1]);
        let student = {
            studentName,
            grade,
            gpa,
        }
        register.push(student);
    })
    let filteredRegister = register.filter(el => {
        if (el.gpa > 3 || el.gpa == 3) {
            return el;
        }
    })
    filteredRegister.sort((a, b) => a.grade - b.grade);

    let grades = {}

    filteredRegister.forEach(student => {
        if (!grades[student.grade]) {
            grades[student.grade] = [];
        }
        grades[student.grade].push(student.studentName);
        grades[student.grade].push(student.gpa);
    })

    let sortedRegister = Object.entries(grades);
    
    sortedRegister.forEach(grade =>{
        console.log(`${Number(grade[0]) + 1} Grade `);
        let names = grade[1].filter(el => isNaN(el))
        console.log(`List of students: ${names.join(', ')}`);
        let avGPA = (grade[1].filter(Number).reduce((a, b) => a+b))/names.length;
        console.log(`Average annual grade from last year: ${avGPA.toFixed(2)}`);
        console.log('');
    })
}


makeRegister(["Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])