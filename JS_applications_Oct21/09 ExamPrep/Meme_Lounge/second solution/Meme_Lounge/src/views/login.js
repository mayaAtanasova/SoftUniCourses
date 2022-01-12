import { login } from '../api/api.js';
import { html } from '../lib.js';
import { notify } from '../util.js';

const loginTemplate = (onSubmit) => html`
        <!-- Login Page ( Only for guest users ) -->
        <section id="login">
            <form id="login-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Login</h1>
                    <label for="email">Email</label>
                    <input id="email" placeholder="Enter Email" name="email" type="text">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn button" value="Login">
                    <div class="container signin">
                        <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));

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
            await login(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        } catch (err) {
            notify(err.message, 3000);
        }
    }
}

