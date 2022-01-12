import { editCar, getCarById } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (car, onSubmit) => html`
        <!-- Edit Listing Page -->
        <section id="edit-listing">
            <div class="container">
        
                <form id="edit-form" @submit=${onSubmit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>
        
                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>
        
                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>
        
                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>
        
                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>
        
                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>
        
                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>
        
                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`;
export async function editPage(ctx) {

    const carId = ctx.params.id;
    const car = await getCarById(carId);

    ctx.render(editTemplate(car, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});
        data.year = Number(data.year);
        data.price = Number(data.price);
        const missing = Object.values(data).filter(x => x == '');
        try {
            if (missing.length > 0) {
                return alert('All fields are required');
            }
            if (data.year < 0 || data.price < 0) {
                return alert('Year and Price must be positive numbers');
            }
            await editCar(carId, data);
            ev.target.reset();
            ctx.updateUserNav();
            ctx.page.redirect(`/details/${carId}`);
        } catch (err) {
            alert(err.message);
        }
    }
}