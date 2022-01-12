import { register } from '../api/api.js';
import {html} from '../lib.js';
import { notify } from '../util.js';

const registerTemplate = (onSubmit) => html`
        <!-- Register Page ( Only for guest users ) -->
        <section id="register">
            <form id="register-form" @submit=${onSubmit}>
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="#">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`;

export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});
        const missing = Object.values(data).filter(x => x.trim() =='');
        try{
            if(missing.length > 0){
                notify ('All fields are required', 3000);
                return;
            }
            if(data.password != data.repeatPass){
                notify ('Passwords do not match', 3000);
                return;
            }
            await register(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        }catch(err){
            notify (err.message, 3000);
        }
    }
}