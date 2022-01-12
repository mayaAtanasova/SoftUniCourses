async function library() {
    const loadBtn = document.getElementById('loadBooks');
    const tbody = document.querySelector('tbody');
    const form = document.querySelector('form');
    const formTitle = form.querySelector('h3');
    const titleField = form.querySelectorAll('input')[0];
    const authorField = form.querySelectorAll('input')[1];
    const formBtn = form.querySelector('button');
    let globalId = '';

    loadBtn.addEventListener('click', loadBooks);

    form.addEventListener('submit', ev => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        if (formBtn.innerText == 'Submit') {
            createBook(data);
        } else if (formBtn.innerText == 'Save') {
            putBook(globalId, data);
        }
    });

    async function loadBooks(ev) {
        tbody.innerHTML = '';
        const res = await fetch('http://localhost:3030/jsonstore/collections/books');
        const data = await res.json();
        const entries = Object.entries(data);
        entries.forEach(entry => {
            const tr = e('tr', e('td', entry[1].title), e('td', entry[1].author), e('button', 'Edit'), e('button', 'Delete'));
            const [editBtn, deleteBtn] = Array.from(tr.querySelectorAll('button'));
            editBtn.addEventListener('click', () => {
                console.log(entry[0]);
                editBook(entry[0], entry[1].author, entry[1].title);
            });
            deleteBtn.addEventListener('click', (ev) => {
                deleteBook(ev, entry[0]);
            });
            tbody.appendChild(tr);
        });
    }

    async function createBook(data) {
        if (data.author == '' || data.title == '') {
            alert('Please fill in all fields');
            return;
        }
        const body = JSON.stringify(data);
        const res = await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });
        if (res.ok != true) {
            alert('Record was not created');
        }
        const inpFields = Array.from(form.querySelectorAll('input'));
        inpFields.forEach(field => {
            field.value = '';
        });
    }

    function editBook(id, author, title) {
        formTitle.innerText = 'Edit FORM';
        formBtn.innerText = 'Save';
        authorField.value = author;
        titleField.value = title;
        globalId = id;
    }

    async function putBook(id, data) {
        const url = `http://localhost:3030/jsonstore/collections/books/${id}`;
        const res = await fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author: data.author, title: data.title })
        });
        if (res.ok == true) {
            alert('Record successfully updated');
            formTitle.innerText = 'FORM';
            formBtn.innerText = 'Submit';
            titleField.value = '';
            authorField.value = '';
        }
    }

    async function deleteBook(ev, id) {
        const res = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            method: 'delete'
        });
        ev.target.parentNode.remove();
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

library();