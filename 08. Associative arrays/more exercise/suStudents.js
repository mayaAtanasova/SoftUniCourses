function sortStudents(input) {
    let suCourses = new Map();
    input.forEach(line => {
        if (line.includes(': ')) {
            let [courseName, capacity] = line.split(': ');
            capacity = Number(capacity);
            if (!suCourses.has(courseName)) {
                suCourses.set(courseName, {
                    'capacity': capacity,                    
                });
            } else {
                let current = suCourses.get(courseName);
                let newCapacity = current['capacity'] + capacity;
                let currStudents = current['students'];
                suCourses.set(courseName, {
                    'capacity': newCapacity,
                    'students': currStudents,
                });
            }
        } else {
            let tokens = line.split(' joins ');
            let courseName = tokens[1];
            let [user, email] = tokens[0].split(' with email ');
            let [userName, creditCount] = user.split('[');
            let students = [];
            creditCount = creditCount.replace(']', '');
            if (suCourses.has(courseName)) {
                let courseCapacity = suCourses.get(courseName)['capacity']
                if (courseCapacity > 0) {
                    let student = creditCount + ': ' + userName + ', ' + email;
                    if (suCourses.get(courseName).hasOwnProperty('students')) {
                        students = suCourses.get(courseName)['students'];
                    }
                    students.push(student);
                    courseCapacity--;
                    suCourses.set(courseName, {
                        'capacity': courseCapacity,
                        'students': students,
                    });
                }
            }
        }
    });
    let sortedCourses = Array.from(suCourses)
    .sort((a,b) => b[1]['students'].length - a[1]['students'].length)
    .forEach(c =>{
        console.log(`${c[0]}: ${c[1]['capacity']} places left`);
        c[1]['students'].sort((a,b) => b.split(': ')[0] - a.split(': ')[0])
        .forEach(s => {
            console.log(`--- ${s}`);
        })
    });
    // console.log(sortedCourses);
}

sortStudents([
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
])