import { deleteCar, getCarById } from '../api/data.js';
import {html} from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (car, isOwner, onDelete) => html`

        <!-- Listing Details Page -->
        <section id="listing-details">
            <h1>Details</h1>
            <div class="details-info">
                <img src=${car.imageUrl}>
                <hr>
                <ul class="listing-props">
                    <li><span>Brand:</span>${car.brand}</li>
                    <li><span>Model:</span>${car.model}</li>
                    <li><span>Year:</span>${car.year}</li>
                    <li><span>Price:</span>${car.price}$</li>
                </ul>

                <p class="description-para">${car.description}</p>

                ${isOwner
                ? html`
                <div class="listings-buttons">
                    <a href="/edit/${car._id}" class="button-list">Edit</a>
                    <a @click=${onDelete} class="button-list">Delete</a>
                </div>`
                : null}
            </div>
        </section>
`;

export async function detailsPage(ctx){
    const carId = ctx.params.id;
    const car = await getCarById(carId);

    const userData = getUserData();
    const isOwner = userData && userData.id == car._ownerId;

    ctx.render(detailsTemplate(car, isOwner, onDelete));

    async function onDelete(){
        const agree = confirm('Are you sure you want to delete this item?');
        if (agree) {
            await deleteCar(carId);
            ctx.page.redirect('/catalog');
        }
    
    }
}

