import { createItems } from '../api/data.js';
import {html} from '../lib.js';

const createTemplate = (onSubmit) => html`
        <!-- Create Page ( Only for logged-in users ) -->
        <section id="create-page" class="auth">
            <form id="create" @submit=${onSubmit}>
                <div class="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
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
                return alert ('All fields are required');
            }
            await createItems(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/');
        }catch(err){
            alert (err.message);
        }
}
}

