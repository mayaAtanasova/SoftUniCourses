import { html, render } from './node_modules/lit-html/lit-html.js';
//no error checking due to laziness this time

const tbody = document.querySelector('tbody');
const url = 'http://localhost:3030/jsonstore/advanced/table';
const searchField = document.getElementById('searchField');

document.querySelector('#searchBtn').addEventListener('click', onClick);

const rowsTemplate = (data) => html`
<tr id=${data._id} class="${data.selected ? 'select' : ''}">
   <td>${data.firstName} ${data.lastName}</td>
   <td>${data.email}</td>
   <td>${data.course}</td>
</tr>
`;

renderData();

async function renderData(){
   const rowsData = await getData();
   rowsData.map(r => r.selected = false);
   render(rowsData.map(rowsTemplate), tbody);
}

async function getData() {
   const res = await fetch(url);
   const data = await res.json();
   return Object.values(data);
}


   function onClick() {
      const searchString = searchField.value.trim().toLocaleLowerCase();
      const rows = [...document.querySelectorAll('tr')];
      rows.forEach(row => {
         if(row.classList.contains('select')){
            row.classList.toggle('select');
         }
      });
      searchField.value = '';
      rows.forEach(row => {
         if(row.innerText.toLocaleLowerCase().includes(searchString)){
            row.classList.toggle('select');
         };
      });
      
   }

