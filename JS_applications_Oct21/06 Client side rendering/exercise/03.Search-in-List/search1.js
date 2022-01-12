import { html, render } from 'lit-html';
import { towns } from './towns.js';

const container = document.getElementById('towns');
const searchBtn = document.querySelector('button');
const searchField = document.getElementById('searchText');
const result = document.getElementById('result');

render(html`<ul>${towns.map(t => html`<li>${t}</li>`)}</ul>`, container);

searchBtn.addEventListener('click', search);

function search() {
   const allTowns = [...document.querySelectorAll('ul li')];

   allTowns.forEach(t => {
      t.style.fontWeight = 'normal';
      t.style.textDecoration = 'none';
   });

   const searchString = searchField.value;
   const foundTowns = allTowns.filter(x => x.textContent.includes(searchString));

   foundTowns.forEach(t => {
      t.style.fontWeight = 'bold';
      t.style.textDecoration = 'underline';
   });

   result.innerText = `${foundTowns.length} matches found`;
};
