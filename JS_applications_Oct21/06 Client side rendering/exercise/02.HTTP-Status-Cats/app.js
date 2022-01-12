import { html, render } from './node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

const holder = document.getElementById('allCats');

const catTemplate = (cat, handleClick) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${(ev)=> handleClick(ev, cat.id)}>Show staus code</button>
        <div class="status" style="display: none" id="${cat.id}">
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;


function handleClick(ev, id) {
    const hiddenDiv = document.getElementById(id);
    if(hiddenDiv.style.display == 'none'){
        hiddenDiv.style.display = 'inline-block';
        ev.target.textContent = 'Hide status code';
    } else {
        hiddenDiv.style.display = 'none';
        ev.target.textContent = 'Show status code';
    }

}

render(html`<ul>${cats.map(c => catTemplate(c, handleClick))}</ul>`, holder);
