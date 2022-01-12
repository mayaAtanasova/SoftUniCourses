
import { html } from '../src/lib.js';
import { deleteMeme, getMemeById } from '../src/api/data.js';
import { getUserData } from '../src/util.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
<section id="meme-details">
<h1>Meme title: ${meme.title}</h1>
<div class="meme-details">
    <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl}>
    </div>
    <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>
        ${isOwner 
        ? html`
            <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete} href="javascript:void(0)" class="button danger">Delete</button>`
        : null}
    </div>
</div>
</section>
`;

export async function detailsPage(ctx) {
    const meme = await getMemeById(ctx.params.id);
    const userData = getUserData();
    const isOwner = userData && userData.id == meme._ownerId;

    ctx.render(detailsTemplate(meme, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');
    
        if (choice) {
            await deleteMeme(ctx.params.id);
            ctx.page.redirect('/');
        }
    }
}

