import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';

const contactTemplate = (data, onDetails) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${data.name}</h2>
        <button @click=${() => onDetails(data)} class="detailsBtn">Details</button>
        <div class="details" style="display:none" id="${data.id}">
            <p>Phone number: ${data.phoneNumber}</p>
            <p>Email: ${data.email}</p>
        </div>
    </div>
</div>
`;


const container = document.getElementById('contacts');
render(contacts.map(c => contactTemplate(c, onDetails)), container);

function onDetails(contact) {
    const detDiv = document.getElementById(contact.id);
    if(detDiv.style.display == 'none'){
        detDiv.style.display = 'inline-block';
    }else{
        detDiv.style.display = 'none';
    }
}



