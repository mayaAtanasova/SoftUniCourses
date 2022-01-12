import { page, render } from './lib.js';
import { catalogPage  } from './views/catalog.js';

const root = document.querySelector('main');


page(decorateContext);//middleware
page('/home', catalogPage);
page('/create', catalogPage);
page.start();

async function decorateContext(ctx, next) {
    ctx.render = (template) => render(template, root);
    next();
}
