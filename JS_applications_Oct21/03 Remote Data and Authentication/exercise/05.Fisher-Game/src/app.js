const navbar = document.querySelector('nav');
const userDiv = navbar.querySelector('#user');
const guestDiv = navbar.querySelector('#guest');
const span = navbar.querySelector('span');
const ssData = sessionStorage.getItem('userData');
const logoutBtn = navbar.querySelector('#logout');
const loadBtn = document.querySelector('.load');
const addBtn = document.querySelector('.add');
const legend = document.querySelector('legend');
const homeView = document.querySelector('#home-view');
const addForm = document.querySelector('#addForm');
let email, token, id = '';

homeView.prepend(e('p', { id: 'temp-title', style: 'text-align:center' }, 'Click to load catches'));

loadBtn.addEventListener('click', () => {
    loadCatches();
});

if (ssData != null) {
    ({ email, token, id } = JSON.parse(ssData));
    guestDiv.style.display = 'none';
    userDiv.style.display = 'inline-block';
    span.innerText = email;
    addBtn.disabled = false;
    addForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = [...formData].reduce((acc, [k, v]) => Object.assign(acc, { [k]: v }), {});
        addCatch(data);
    });
    userDiv.querySelector('#logout').addEventListener('click', (ev) => {
        logout(token);
    });
} else {
    showGuest();
}

function showGuest() {
    userDiv.style.display = 'none';
    guestDiv.style.display = 'inline-block';
    span.innerText = 'guest';
    addBtn.disabled = true;
}

async function logout(token) {
    try {
        const res = await fetch('http://localhost:3030/users/logout', {
            method: 'get',
            headers: { 'X-Authorization': token }
        });
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
        sessionStorage.removeItem('userData');
        showGuest();
    } catch (error) {
        alert(error.message);
    }
}

async function loadCatches() {
    homeView.children[0].remove();
    try {
        const res = await fetch('http://localhost:3030/data/catches/');
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        const tempP = homeView.querySelector('p');
        if (tempP != null) {
            homeView.removeChild(tempP);
        }
        homeView.prepend(e('fieldset', { id: 'main' }, e('legend', { align: 'center' }, 'Catches'), e('div', { id: 'catches' })));
        const catches = homeView.querySelector('#catches');
        data.forEach(entry => {
            const catchDiv = createCatch(entry);
            catches.appendChild(catchDiv);
        });
    } catch (error) {
        alert(error.message);
    }
}

function createCatch(data) {
    const catchDiv = e('div', { className: 'catch' },
        e('label', {}, 'Angler'),
        e('input', { type: 'text', className: 'angler', value: data.angler }),
        e('label', {}, 'Weight'),
        e('input', { type: 'text', className: 'weight', value: data.weight }),
        e('label', {}, 'Species'),
        e('input', { type: 'text', className: 'species', value: data.species }),
        e('label', {}, 'Location'),
        e('input', { type: 'text', className: 'location', value: data.location }),
        e('label', {}, 'Bait'),
        e('input', { type: 'text', className: 'bait', value: data.bait }),
        e('label', {}, 'Capture Time'),
        e('input', { type: 'text', className: 'captureTime', value: data.captureTime }),
        button('Update', { className: 'update', 'data-id': data._id, disabled: 'true' }),
        button('Delete', { className: 'delete', 'data-id': data._id, disabled: 'true' })
    );
    const [updateBtn, deleteBtn] = catchDiv.querySelectorAll('button');
    if (id == data._ownerId) {
        updateBtn.disabled = false;
        deleteBtn.disabled = false;
        updateBtn.addEventListener('click', (ev) => {
            const catchId = ev.target['data-id'];
            const inputs = ev.target.parentNode.querySelectorAll('input');
            const data = [...inputs].reduce((acc, c) => Object.assign(acc, { [c.className]: c.value }), {});
            updateCatch(catchId, data);
        });
        deleteBtn.addEventListener('click', (ev) => {
            const catchId = ev.target['data-id'];
            deleteCatch(catchId);
        });
    }
    return catchDiv;
}

async function addCatch(catchData) {
    try {
        const res = await fetch('http://localhost:3030/data/catches/', {
            method: 'post',
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(catchData)
        });
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
        const data = await res.json();
        loadCatches();
        const inputs = addForm.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    } catch (error) {
        alert(error.message);
    }
}

async function updateCatch(catchId, catchData) {
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${catchId}`, {
            method: 'put',
            headers: {
                'X-Authorization': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(catchData)
        });
        if (res.ok != true) {
            throw new Error(res.statusText);
        } else {
            alert('Catch successfully updted');
        }
        loadCatches();
    } catch (error) {
        alert(error.message);
    }
}

async function deleteCatch(catchId) {
    try {
        const res = await fetch(`http://localhost:3030/data/catches/${catchId}`, {
            method: 'delete',
            headers: {
                'X-Authorization': token
            }
        });
        if (res.ok != true) {
            throw new Error(res.statusText);
        }
        loadCatches();
    } catch (error) {
        alert(error.message);
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);
    for (let prop in attributes) {
        result[prop] = attributes[prop];
    }
    content.forEach(el => {
        if (typeof el == 'string' || typeof el == 'number') {
            el = document.createTextNode(el);
        }
        result.appendChild(el);
    });
    return result;
}

function button(label, attributes, callback) {
    const element = e('button', attributes, label);
    element.addEventListener('click', callback);
    return element;
}