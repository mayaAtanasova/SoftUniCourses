import { deleteGame, getGameById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (game, isOwner, onDelete) => html`
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
            <!-- <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article> -->

        </section>`;

export async function detailsPage(ctx){
    const gameId = ctx.params.id;
    const game = await getGameById(gameId);

    const userData = getUserData();
    const isOwner = userData && userData.id == game._ownerId;
    
    ctx.render(detailsTemplate(game, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this entry?');
        if(choice){
            await deleteGame(gameId);
            ctx.page.redirect('/');
        }
    }
}