import { getMemesByUser } from '../src/api/data.js';
import { html, page } from '../src/lib.js';
import { getUserData } from '../src/util.js';

const profileTemplate = (userData, memes) => html`
        <section id="user-profile-page" class="user-profile">
        <article class="user-info">
                        <img id="user-avatar-url" alt="user-profile" src=${userData.gender == 'male'
                        ? '/images/male.png'
                        : '/images/female.png'
                        }>
                        <div class="user-content">
                                <p>Username: ${userData.username}</p>
                                <p>Email: ${userData.email}</p>
                                <p>My memes count: ${memes.length}</p>
                        </div>
                </article>
                <h1 id="user-listings-title">User Memes</h1>
                ${memes.length == 0 
                ? html`<p class="no-memes">No memes in database.</p>`
                : memes.map(memeCard)}
        </section>
`;

const memeCard = (meme) => html`
<div class="user-meme-listings">
        <div class="user-meme">
                <p class="user-meme-title">${meme.title}</p>
                <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
                <a class="button" href=${`/details/${meme._id}`}>Details</a>
        </div>
</div>
`;

export async function userPage(ctx) {
        const userData = getUserData();
        const memes = await getMemesByUser(userData.id);

        ctx.render(profileTemplate(userData, memes));
}

