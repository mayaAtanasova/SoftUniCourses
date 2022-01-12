import { html } from './lib.js';
export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
}

export const itemTemplate = (item) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${item.title}</p>
            <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${item._id}">Details</a>
        </div>
    </div>
</div>
`;

export function notify(message, duration) {
    const notification = document.querySelector('.notification');
    notification.querySelector('span').innerText = message;
    notification.style.display = 'block';
    setTimeout(function () {
        notification.querySelector('span').innerText = '';
        notification.style.display = 'none';
    }, duration);
}


// export async function onFormSubmit(ev, ctx, action, dir, id) {
//     ev.preventDefault();
//     const formData = new FormData(ev.target);
//     const data = [...formData].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
//     const missing = Object.values(data).filter(x => x == '');
//     try {
//         if (missing.length > 0) {
//             return alert('All fields are required');
//         }
//         await action(data, id = null);
//         ev.target.reset();
//         ctx.updateUserNav();
//         ctx.page.redirect(dir);
//     } catch (err) {
//         alert(err.message);
//     }
// }
