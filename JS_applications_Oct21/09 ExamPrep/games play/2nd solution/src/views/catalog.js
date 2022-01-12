import { getAllItems } from '../api/data.js';
import {html} from '../lib.js';


const catalogTemplate = (items) => html`
        <section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
        ${items.length == 0
        ? html`<h3 class="no-articles">No articles yet</h3>`
        : items.map(recordTemplate)}            
        </section>
`;

const recordTemplate = (item) => html`
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${item.imageUrl}>
                    <h6>${item.category}</h6>
                    <h2>${item.title}</h2>
                    <a href="/details/${item._id}" class="details-button">Details</a>
                </div>
            </div>
`;

export async function catalogPage(ctx){
    const items = await getAllItems();

    ctx.render(catalogTemplate(items));


}