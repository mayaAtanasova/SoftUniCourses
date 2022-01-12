import { logout } from './api/api.js';
import { page, render} from './lib.js';
import { getUserData } from './util.js';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { userPage } from './views/user.js';

const root = document.querySelector('main');
const logoutButton = document.querySelector('#logout-btn');
logoutButton.addEventListener('click', onLogout);

page(decorateContext);
page('/', (dashboardPage));
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/user/:id', userPage);


updateUserNav();
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const userData = getUserData();
    if(userData) {
        document.querySelector('#user').style.display = 'inline-block';
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    }else {
        document.querySelector('#user').style.display = 'none';
        document.querySelector('#guest').style.display = 'inline';
    }
}



async function onLogout(){
    await logout();
    updateUserNav();
    page.redirect('/');
}
