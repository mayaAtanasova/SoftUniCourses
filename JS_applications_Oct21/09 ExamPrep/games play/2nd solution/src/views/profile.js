import { getUserCollection } from '../api/data.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const profileTemplate = (items) => html`

`;

const carTemplate = (item) => html`

`;

export async function profilePage(ctx){
    const userData = getUserData();
    const userId = userData.id;
    const items = await getUserCollection(userId);

    ctx.render(profileTemplate(items));
}