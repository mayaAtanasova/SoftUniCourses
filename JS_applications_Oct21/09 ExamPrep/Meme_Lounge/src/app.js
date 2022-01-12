import { allMemesPage } from '../views/allMemes.js';
import { createPage } from '../views/create.js';
import { detailsPage } from '../views/details.js';
import { editPage } from '../views/edit.js';
import { homePage } from '../views/home.js';
import { loginPage } from '../views/login.js';
import { userPage } from '../views/profile.js';
import { registerPage } from '../views/register.js';
import { logout } from './api/data.js';
import {html, until, render, page} from './lib.js';
import { getUserData } from './util.js';

const root = document.querySelector('main');
const logoutButton = document.querySelector('.user div.profile a:nth-last-child(1)');
logoutButton.addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/all', allMemesPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);
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
        document.querySelector('.user').style.display = 'inline';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
    }else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'inline';
    }
}



async function onLogout(){
    await logout();
    updateUserNav();
    page.redirect('/');
}
