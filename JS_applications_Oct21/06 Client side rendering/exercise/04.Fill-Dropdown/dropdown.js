import { html, render } from './node_modules/lit-html/lit-html.js';

const selectMenu = document.getElementById('menu');
const form = document.querySelector('form');
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const optionTemplate = (data) => html`
        <option value="${data._id}">${data.text}</option>
    `;
//initialize
renderOptions();
//add form listener
form.addEventListener('submit', addItem);

//functionality
async function renderOptions() {
    let optionsArr = await getOptions();
    render(html`${optionsArr.map(optionTemplate)}`, selectMenu);
}

async function addItem(ev) {
    ev.preventDefault();
    const text = document.getElementById('itemText').value;

    if (text) {
        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        });
        if (res.ok) {
            renderOptions();
            form.reset();
        }
    } else {
        alert('You have to fill in an option');
    }
}

async function getOptions() {
    try {
        const res = await fetch(url);
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        return Object.values(data);
    } catch (error) {
        alert(error.message);
    }
}
