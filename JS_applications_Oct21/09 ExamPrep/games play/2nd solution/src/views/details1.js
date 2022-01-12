import { deleteItem, getAllCommentsForGame, getItemById, postComment } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (item, isOwner, onDelete, comments, userData, onComment) => html`

        <!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src=${item.imageUrl} />
                    <h1>${item.title}</h1>
                    <span class="levels">MaxLevel: ${item.maxLevel}</span>
                    <p class="type">${item.category}</p>
                </div>

                <p class="text">${item.summary}</p>
        
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length == 0
                    ? html`<p class="no-comment">No comments.</p>`
                    : html`
                    <ul>
                        ${comments.map(commentTemplate)}
                    </ul>
                    `}
                </div>

                ${isOwner
                    ? html`
                <div class="buttons">
                    <a href="/edit/${item._id}" class="button">Edit</a>
                    <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
                </div>`
                : null}
            </div>

            ${userData && !isOwner
                    ? html`
                <article class="create-comment">
                    <label>Add new comment:</label>
                    <form class="form" @submit=${onComment}>
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input class="btn submit" type="submit" value="Add Comment">
                    </form>
                </article>
                `
                    : null
                }
        </section>
`;


const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>`;

export async function detailsPage(ctx) {
    const itemId = ctx.params.id;
    const item = await getItemById(itemId);

    const userData = getUserData();
    const isOwner = userData && userData.id == item._ownerId;

    update();

    async function update() {
        const comments = await getAllCommentsForGame(itemId);
        console.log(itemId);
        ctx.render(detailsTemplate(item, isOwner, onDelete, comments, userData, onComment));
    }


    async function onDelete() {
        const agree = confirm('Are you sure you want to delete this item?');
        if (agree) {
            await deleteItem(itemId);
            ctx.page.redirect('/');
        }

    }

    async function onComment(ev) {
        ev.preventDefault();
        const gameId = itemId;
        const comment = ev.target.querySelector('[name="comment"]').value;
        if (comment == '') {
            return alert('You cannot post an empty comment!');
        }
        await postComment({ gameId, comment });
        ev.target.reset();
        update();
    }
}

