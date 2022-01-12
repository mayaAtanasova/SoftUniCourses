import { createItems } from '../api/data.js';
import {html} from '../lib.js';
import { notify } from '../util.js';

const createTemplate = (onSubmit) => html`
        <!-- Create Meme Page ( Only for logged users ) -->
        <section id="create-meme">
            <form id="create-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`;

export function createPage(ctx){
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});
        const missing = Object.values(data).filter(x => x=='');
        try{
            if(missing.length > 0){
                notify ('All fields are required', 3000);
                return;
            }
            await createItems(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        }catch(err){
            notify (err.message, 3000);
        }
}
}

