import { loginPage } from './views/login.js';
import { logout } from './api/api.js';
import { page, render} from './lib.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { detailsPage } from './views/details.js';
import { catalogPage } from './views/catalog.js';

const root = document.querySelector('#main-content');
const logoutButton = document.querySelector('#logout-btn');
logoutButton.addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/edit/:id', editPage);
page('/details/:id', detailsPage);
page('/catalog', catalogPage);


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
