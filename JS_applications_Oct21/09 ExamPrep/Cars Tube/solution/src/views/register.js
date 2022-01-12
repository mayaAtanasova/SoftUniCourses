import { register } from '../api/api.js';
import {html} from '../lib.js';

const registerTemplate = (onSubmit) => html`
        <!-- Register Page -->
        <section id="register">
            <div class="container">
                <form id="register-form" @submit=${onSubmit}>
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`;

export function registerPage(ctx){
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});
        const missing = Object.values(data).filter(x => x.trim() =='');
        console.log(missing);
        try{
            if(missing.length > 0){
                return alert ('All fields are required');
            }
            if(data.password != data.repeatPass){
                return alert ('Passwords do not match');
            }
            await register(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        }catch(err){
            alert (err.message);
        }
    }
}