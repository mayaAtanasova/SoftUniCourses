import { login } from '../src/api/data.js';
import { html, page } from '../src/lib.js';
import { createSubmitHandler } from '../src/util.js';

const loginTemplate = (onSubmit, errorMessage) => html`
        ${errorMessage ? html`
                        <section id="notifications">
                            <div id="errorBox" class="notification">
                                <span>${errorMessage}</span>
                            </div>
                        </section>`
                        : null}
        
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
    update();

    function update(errorMsg){
        ctx.render(loginTemplate(onSubmit, errorMsg));
    }

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            if(email == '' || password == ''){
                throw new Error ('All fields are required!');
            }
            await login(email, password);
            ctx.updateUserNav();
            ctx.page.redirect('/all');
        } catch (err) {
            update(err.message);
        }
    }
}

