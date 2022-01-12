import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townNames } from './towns.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';

const container = document.getElementById('towns');
const searchBtn = document.querySelector('button');
const searchField = document.getElementById('searchText');
const result = document.getElementById('result');
let towns = townNames.map(t => ({ name: t, matched: false }));
searchBtn.addEventListener('click', search);

onRender();

function onRender() {
    render(html`<ul>${towns.map(t => html`<li class=${t.matched ? 'active' : '' }>${t.name}</li>`)}</ul>`, container);
}


function search() {

    const searchString = searchField.value.trim().toLocaleLowerCase();
    if(searchString){
        towns.forEach(town =>{
            if(town.name.toLocaleLowerCase().includes(searchString)){
                town.matched = true;
            }else{
                town.matched = false;
            }
        });
        const foundTowns = towns.reduce((a, c) => c.matched == true ? a += 1 : a += 0, 0);

        result.innerText = `${foundTowns} matches found`;
        onRender();
    }

};
