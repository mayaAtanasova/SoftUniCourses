import { login } from '../api/api.js';
import {html} from '../lib.js';

const loginTemplate = (onSubmit) => html`

        <!-- Login Page -->
        <section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit=${onSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
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
            ctx.page.redirect('/catalog');
        }catch(err){
            alert (err.message);
        }
    }
}