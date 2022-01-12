import { html, render } from './node_modules/lit-html/lit-html.js';

const form = document.querySelector('form');
const root = document.getElementById('root');

const myList = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>
`;

form.addEventListener('submit', ev => {
    ev.preventDefault();
    const formData = new FormData(form);
    const towns = formData.get('towns').split(', ');
    console.log('towns');
    render(myList(towns), root);
    form.reset();
});

