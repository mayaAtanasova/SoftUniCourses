import { editItem, getItemById } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (item, onSubmit) => html`
        <!-- Edit Page ( Only for the creator )-->
        <section id="edit-page" class="auth">
            <form id="edit" @submit=${onSubmit}>
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${item.title}

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${item.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${item.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${item.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary">${item.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`;
export async function editPage(ctx) {

    const itemId = ctx.params.id;
    const item = await getItemById(itemId);

    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
        const missing = Object.values(data).filter(x => x == '');
        try {
            if (missing.length > 0) {
                return alert('All fields are required');
            }
            await editItem(itemId, data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect(`/details/${itemId}`);
        } catch (err) {
            alert(err.message);
        }
    }
}