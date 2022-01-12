import { deleteBook, getBookById, getLikesByUser, getTotalLikes, likeBook } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (book, isOwner, userId, totalLikes, onDelete, onLike, alreadyLiked) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                    ${isOwner
                    ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a class="button" href="javascript:void(0)" @click=${onDelete}>Delete</a>`
                    : userId 
                        ? alreadyLiked 
                            ? null
                            : html`<a class="button" href="javascript:void(0)" @click=${(ev) => onLike(ev, book._id, userId)}>Like</a>` 
                        : null
                    }
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${totalLikes.length}</span>
                    </div>
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>
`;

export async function detailsPage(ctx){
    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    let totalLikes = await getTotalLikes(bookId);

    const userData = getUserData();
    const userId = userData.id;
    const isOwner = userData && userData.id == book._ownerId;
    let alreadyLiked = await getLikesByUser(bookId, userId);

    update(alreadyLiked, totalLikes);

    function update(alreadyLiked, totalLikes){
        ctx.render(detailsTemplate(book, isOwner, userId, totalLikes, onDelete, onLike, alreadyLiked));
    }

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this item?');
    
        if (choice) {
            await deleteBook(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onLike(ev, bookId, userId){
        ev.preventDefault();
        await likeBook({bookId});
        alreadyLiked = await getLikesByUser(bookId, userId);
        totalLikes = await getTotalLikes(bookId);
        update(alreadyLiked, totalLikes);
    }
}