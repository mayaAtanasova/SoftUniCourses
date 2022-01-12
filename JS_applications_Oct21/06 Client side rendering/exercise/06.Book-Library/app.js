import { html, render } from './node_modules/lit-html/lit-html.js';

const body = document.querySelector('body');
const url = 'http://localhost:3030/jsonstore/collections/books';


const siteTemplate = () => html`
<button id='loadBooks' @click=${() => getAllBooks()}>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<form id="addForm" style="display:block">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit" @click=${(ev)=> createBook(ev)}>
</form>
<form id="editForm" style="display:none">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save" @click=${(ev) => updateBook(ev)}>
</form>
    `;

const rowTemplate = (book) => html`
            <tr data-id="${book.id}">
                <td>${book.author}</td>
                <td>${book.title}</td>
                <td>
                    <button @click=${(ev) => loadBookForEditing(book.id)}>Edit</button>
                    <button @click=${() => deleteBook(book.id)}>Delete</button>
                </td>
            </tr>
            `;

renderPage();

function renderPage() {
    render(siteTemplate(), body);
}
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
async function getAllBooks() {
    const booksData = await getData();
    const books = Object.entries(booksData).map(b => ({ id: b[0], author: b[1].author, title: b[1].title }));
    render(books.map(rowTemplate), document.querySelector('tbody'));
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target.parentNode);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    if (book.title == '' || book.author == '') {
        return alert('All fields are required!');
    }

    await fetch(url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    event.target.parentNode.reset();
}

async function updateBook(event) {
    event.preventDefault();
    console.log(event.target.parentNode);
    const formData = new FormData(event.target.parentNode);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    if (book.title == '' || book.author == '') {
        return alert('All fields are required!');
    }

    const res = await fetch(`${url}/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });
    console.log(res.statusText);
    document.getElementById('addForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
    event.target.reset();
}

async function deleteBook(id) {
    await fetch(`${url}/${id}`, {
        method: 'delete',
    });
}

async function loadBookForEditing(id) {
    document.getElementById('addForm').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    const res = await fetch(`${url}/${id}`);
    const book = await res.json();

    document.querySelector('#editForm [name="id"]').value = id;
    document.querySelector('#editForm [name="title"]').value = book.title;
    document.querySelector('#editForm [name="author"]').value = book.author;
}
