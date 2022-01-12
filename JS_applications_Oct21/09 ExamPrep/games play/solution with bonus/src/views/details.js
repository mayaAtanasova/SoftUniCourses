import { deleteGame, getAllComments, getGameById, postComments } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, nonOwner, onDelete, comments, onComment) => html`
        <!--Details Page-->
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>

                <p class="text">
                    ${game.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length == 0
                        ? html`<p class="no-comment">No comments.</p>`
                        : html`
                            <ul>                        
                                ${comments.map(commentTemplate)}
                            </ul>`
                    }
                </div>

                ${isOwner
                ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} class="button">Delete</a>
                </div>`
                : null}
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${nonOwner
            ? html`
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form" @submit=${onComment}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>`
            : null}
            

        </section>`;

const commentTemplate = (comment) => html`
    <li class="comment">
        <p>Content: ${comment.comment}</p>
    </li>
        `;

export async function detailsPage(ctx){
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);
    let comments = await getAllComments(gameId);
    
    const userData = getUserData();
    const isOwner = userData && userData.id == game._ownerId;
    const nonOwner = userData && userData.id != game._ownerId;
    
    update(comments);

    function update(comments){
        ctx.render(detailsTemplate(game, isOwner, nonOwner, onDelete, comments, onComment));
    }

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this entry?');
        if(choice){
            await deleteGame(gameId);
            ctx.page.redirect('/');
        }
    }

    async function onComment(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const comment = formData.get('comment').trim();
        try{
            if(comment == ''){
                return alert('You cannot send an empty comment');
            }
            await postComments({gameId, comment});
            comments = await getAllComments(gameId);
            ev.target.reset();
            update(comments);
        }catch(err){
            alert(err.message);
        }

    }
}