import { html } from '../src/lib.js';
import {createMeme} from '../src/api/data.js';

const memeTemplate = (onSubmit) => html`
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


export function createPage(ctx) {
    

        ctx.render(memeTemplate(onSubmit));


    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        try {
            if(title == '' || description == '' || imageUrl == ''){
                throw new Error ('All fields are required!');
            }
            await createMeme({title, description, imageUrl});
            ctx.page.redirect('/all');
        } catch (err) {
            return alert(err.message);
        }
    }

}