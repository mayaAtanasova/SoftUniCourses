
export function getUserData() {
    return JSON.parse(sessionStorage.getItem('userData'));
}

export function setUserData(data) {
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    sessionStorage.removeItem('userData');
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
