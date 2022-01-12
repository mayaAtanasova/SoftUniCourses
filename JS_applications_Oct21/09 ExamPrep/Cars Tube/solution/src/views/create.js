import { createCar } from '../api/data.js';
import {html} from '../lib.js';

const createTemplate = (onSubmit) => html`
        <section id="create-listing">
            <div class="container">
                <form id="create-form" @submit=${onSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`;

export function createPage(ctx){
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev){
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k,v]) => Object.assign(a, {[k]: v}), {});
        data.year = Number(data.year);
        data.price = Number(data.price);
        const missing = Object.values(data).filter(x => x=='');
        try{
            if(missing.length > 0){
                return alert ('All fields are required');
            }
            if(data.year < 0 || data.price < 0){
                return alert('Year and Price must be positive numbers');
            }
            await createCar(data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect('/catalog');
        }catch(err){
            alert (err.message);
        }
}
}

