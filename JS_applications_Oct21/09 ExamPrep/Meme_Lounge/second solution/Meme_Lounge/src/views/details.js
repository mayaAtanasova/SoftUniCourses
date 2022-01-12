import { deleteItem, getItemById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
        <section id="meme-details">
            <h1>Meme Title: ${item.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${item.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${item.description}</p>
                    ${isOwner
                    ? html`
                    <a class="button warning" href="/edit/${item._id}">Edit</a>
                    <button class="button danger" @click=${onDelete}>Delete</button>`
                    : null}
                </div>
            </div>
        </section>
`;

export async function detailsPage(ctx) {
    const itemId = ctx.params.id;
    const item = await getItemById(itemId);

    const userData = getUserData();
    const isOwner = userData && userData.id == item._ownerId;

    ctx.render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        const agree = confirm('Are you sure you want to delete this item?');
        if (agree) {
            await deleteItem(itemId);
            ctx.page.redirect('/catalog');
        }

    }
}

