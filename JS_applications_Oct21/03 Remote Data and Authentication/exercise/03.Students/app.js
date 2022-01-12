async function getStudents() {
    const studentTableBody = document.getElementById('results').querySelector('tbody');
    const form = document.getElementById('form');
    loadStudents();

    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((acc, [k, v]) => Object.assign(acc, {[k]: v}), {});
        createStudent(data);
    });

    async function loadStudents(){
        studentTableBody.innerHTML = '';
        const res = await fetch('http://localhost:3030/jsonstore/collections/students');
        let data = await res.json();
        data = Object.values(data);
        data.forEach(entry => {
            const tr = e('tr',
                e('td', entry.firstName),
                e('td', entry.lastName),
                e('td', entry.facultyNumber),
                e('td', entry.grade)
            );
            studentTableBody.appendChild(tr);
        });
    }

    async function createStudent(data){
        let fields = Array.from(document.querySelector('.inputs').children);
        if (fields.some(x => x.value == '')){
            alert('Please fill in all fields');
            return;
        }
        const body = JSON.stringify(data);
        const res = await fetch('http://localhost:3030/jsonstore/collections/students', {
            method: 'post',
            heathers: {
                'Content-Type':'application/json'
            },
            body
        });
        if(res.ok == true){
            alert ('Record created successfully');
        }else{
            alert('Could not create record');
        }
        loadStudents();
        fields.forEach(field => field.value = '');
    }
}

function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            el = document.createTextNode(el);
        }
        result.appendChild(el);
    });
    return result;
}

getStudents();