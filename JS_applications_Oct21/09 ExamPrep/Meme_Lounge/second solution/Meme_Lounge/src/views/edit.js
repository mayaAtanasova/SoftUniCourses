import { editItem, getItemById } from '../api/data.js';
import { html } from '../lib.js';
import { notify } from '../util.js';

const editTemplate = (item, onSubmit) => html`
        <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
        <section id="edit-meme">
            <form id="edit-form" @submit=${onSubmit}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${item.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">
                    ${item.description}
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${item.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
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
                notify('All fields are required', 3000);
                return;
            }
            await editItem(itemId, data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect(`/details/${itemId}`);
        } catch (err) {
            notify(err.message, 3000);
        }
    }
}