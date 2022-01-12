import { getFilteredItems } from '../api/data.js';
import { html } from '../lib.js';

const searchTemplate = (cars, onSearch) => html`
        <!-- Search Page -->
        <section id="search-cars">
            <h1>Filter by year</h1>
        
            <div class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list" @click=${onSearch}>Search</button>
            </div>
        
            <h2>Results:</h2>
            <div class="listings">
        
                <!-- Display all records -->
                ${cars.length == 0
                ? html`<p class="no-cars"> No results.</p>`
                : cars.map(recordTemplate)}
            </div>
        </section>
`;

const recordTemplate = (car) => html`
<div class="listing">
    <div class="preview">
        <img src=${car.imageUrl}>
    </div>
    <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
</div>
`;

export function searchPage(ctx) {
    let cars = [];

    update(cars);

    function update(cars) {
        ctx.render(searchTemplate(cars, onSearch));
    }

    async function onSearch(ev) {
        // event.preventDefault();
        const query = Number(ev.target.parentNode.querySelector('input').value.trim());

        if (query == '' || isNaN(query) || query < 0) {
            return alert('Please fill a search year');
        }
        cars = await getFilteredItems(query);
        update(cars);
    }
}

