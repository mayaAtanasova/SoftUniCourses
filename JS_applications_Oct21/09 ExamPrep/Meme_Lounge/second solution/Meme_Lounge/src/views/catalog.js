import { getAllItems } from '../api/data.js';
import {html} from '../lib.js';
import { itemTemplate } from '../util.js';


const catalogTemplate = (items) => html`
        <!-- All Memes Page ( for Guests and Users )-->
        <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${items.length == 0
                ? html`<p class="no-memes">No memes in database.</p>`
            : items.map(itemTemplate)}                
            </div>
        </section>
`;



export async function catalogPage(ctx){
    const items = await getAllItems();

    ctx.render(catalogTemplate(items));

}