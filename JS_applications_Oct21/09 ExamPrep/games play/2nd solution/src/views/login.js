import { login } from '../api/api.js';
import {html} from '../lib.js';

const loginTemplate = (onSubmit) => html`
        <section id="login-page" class="auth">
            <form id="login" @submit=${onSubmit}>

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`;

export function loginPage(ctx){
    ctx.render(loginTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});
        const missing = Object.values(data).filter(x => x=='');
        try{
            if(missing.length > 0){
                return alert ('All fields are required');
            }
            await login(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/');
        }catch(err){
            alert (err.message);
        }
    }
}