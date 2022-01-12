import { editMeme, getMemeById } from '../src/api/data.js';
import { html, until } from '../src/lib.js';
import { createSubmitHandler } from '../src/util.js';


const editTemplate = (memePromise) => html`
<section id="edit-meme">
    ${until(memePromise, html`<p>Loading &hellip;</p>`)}
</section>
`;

const formTemplate = (meme, onSubmit) => html`
    <form id="edit-form" @submit=${onSubmit}>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${meme.description}> 
                </textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
`;

export function editPage(ctx){
    update();

    function update() {
        ctx.render(editTemplate(loadItem(ctx.params.id, createSubmitHandler(onSubmit, 'title', 'description', 'imageUrl'))));
    }
    
    async function onSubmit(data, event){
        try {
            if(data.title == '' || data.description == '' || data.imageUrl == ''){
                throw new Error ('All fields are required!');
            }
            const result = await editMeme(ctx.params.id, data);
            event.target.reset();
            ctx.page.redirect('/details/' + result._id);
        } catch (err) {
            alert(err.message);
            update();
        }
    }

}

async function loadItem(id, onSubmit){
    const meme = await getMemeById(id);
    return formTemplate(meme, onSubmit);
    
}
