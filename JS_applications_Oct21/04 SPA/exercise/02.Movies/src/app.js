import { registerUser, loginUser, logoutUser, getAllMovies, addMovie, getMovieDetails, editMovie, deleteMovie, likeMovie, getLikes } from './userActivity.js';
import { registerFormTemplate, loginFormTemplate, createMovieCard, addMovieFormTemplate, createMovieDetails, createEditFormTemplate } from './templates.js';
import { e } from './elCreator.js';
//TODO move all renderers to render module!


//elements & constants
const container = document.getElementById('container');
const homePage = document.getElementById('home-page');
const h1 = document.querySelector('.text-center');
const addMovieBtn = document.getElementById('add-movie-button');
const navBar = document.querySelector('nav');
const movieBtn = document.querySelector('nav a');
const welcomeBtn = navBar.querySelectorAll('li a')[0];
const logoutBtn = navBar.querySelectorAll('li a')[1];
const loginBtn = navBar.querySelectorAll('li a')[2];
const registerBtn = navBar.querySelectorAll('li a')[3];

let ssData, email, id, token;
//секшъните освен хоум пейдж няма нужда да стоят на страницата!!
//entry point
adjustNavbar();
renderHomePage();

//navigation bar:
//add event listeners and functionality to buttons
movieBtn.addEventListener('click', ev => {
    renderHomePage();
});

registerBtn.addEventListener('click', ev => {
    renderRegisterForm();
});

loginBtn.addEventListener('click', ev => {
    renderLoginForm();
});

logoutBtn.addEventListener('click', ev => {
    logoutUser(token);
    sessionStorage.removeItem('userData');
    adjustNavbar();
    renderHomePage();
});

addMovieBtn.addEventListener('click', ev => {
    ev.preventDefault();
    if (ssData != null) {
        clearAllExceptNavbar();
        renderAddMovieForm();
    }
});

//if user logged in: welcome email address & Logout btn
//if no user logged in welcome guest, login and register btns
function adjustNavbar() {
    updateStorageData();
    if (ssData != null) {
        ({ email, id, token } = JSON.parse(ssData));
        welcomeBtn.innerText = `Welcome, ${email}`;
        welcomeBtn.style.display = 'inline-block';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        registerBtn.style.display = 'none';
    } else {
        welcomeBtn.style.display = 'none';
        loginBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        registerBtn.style.display = 'inline-block';
    }
}

function clearAllExceptNavbar() {
    const sections = document.querySelectorAll('section');
    const allSections = [...sections].forEach(section => section.remove());
    if(container.querySelector('h1') != null){
        container.querySelector('h1').remove();
    }
}

function renderHomePage() {
    updateStorageData();
    clearAllExceptNavbar();
    navBar.after(homePage);
    homePage.after(h1);
    if (ssData != null) {
        h1.after(addMovieBtn);
    }
    renderMovies();
}

function updateStorageData() {
    ssData = sessionStorage.getItem('userData');
}

function renderRegisterForm() {
    clearAllExceptNavbar();
    const regForm = e('section', { className: 'form-sign-up', innerHTML: registerFormTemplate });
    navBar.after(regForm);
    regForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const email = document.querySelector('[name="email"]').value;
        const password = document.querySelector('[name="password"]').value;
        const rePass = document.querySelector('[name="repeatPassword"]').value;
        if (password == '' || rePass == '' || email == '') {
            alert('Please fill in all fields');
            return;
        } else if (password.length < 6) {
            alert('Password should be at least 6 characters long');
        } else if (password != rePass) {
            alert('Passwords do not match, please try agin');
            return;
        } else {
            const result = await registerUser({ email, password });
            sessionStorage.setItem('userData', JSON.stringify({ email: result.email, id: result._id, token: result.accessToken }));
            adjustNavbar();
            renderHomePage();
        }
    });
}

function renderLoginForm() {
    clearAllExceptNavbar();
    const loginForm = e('section', { className: 'form-login', innerHTML: loginFormTemplate });
    navBar.after(loginForm);
    loginForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const email = document.querySelector('[name="email"]').value;
        const password = document.querySelector('[name="password"]').value;
        if (password == '' || email == '') {
            alert('Please fill in all fields');
            return;
        } else {
            const result = await loginUser({ email, password });
            sessionStorage.setItem('userData', JSON.stringify({ email: result.email, id: result._id, token: result.accessToken }));
            adjustNavbar();
            renderHomePage();
        }
    });
}

async function renderMovies() {
    const movieHolder = e('section', { id: 'movie' },
        e('div', { className: 'mt-3' },
            e('div', { className: 'row d-flex d-wrap' },
                e('div', { className: 'card-deck d-flex justify-content-center' })
            )
        )
    );
    const movies = await getAllMovies();
    movies.forEach(movie => {
        const movieCard = e('div', { className: 'card mb-4', innerHTML: createMovieCard(movie.img, movie.title) });
        movieCard.dataset.id = movie._id;
        movieCard.dataset.ownerId = movie._ownerId;
        movieCard.querySelector('button').addEventListener('click', ev => {
            ev.preventDefault();
            if (ssData != null) {
                const dataSet = ev.target.parentNode.parentNode.parentNode.dataset;
                renderMovieDetails(dataSet.id, dataSet.ownerId);
            }
        });
        movieHolder.querySelector('div div div').appendChild(movieCard);
    });
    container.querySelector('footer').before(movieHolder);
}

function renderAddMovieForm() {
    const addMovieSection = e('section', { id: 'add-movie', innerHTML: addMovieFormTemplate });
    navBar.after(addMovieSection);
    const addMovieForm = addMovieSection.querySelector('form');
    addMovieForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const title = addMovieForm.querySelector('[name = "title"]').value;
        const description = addMovieForm.querySelector('[name = "description"]').value;
        const img = addMovieForm.querySelector('[name = "imageUrl"]').value;
        if (title == '' || description == '' || img == '') {
            alert('Please fill in all fields');
            return;
        }
        const data = { title, description, img};
        const result = await addMovie(data, token);
        renderHomePage();
    });
}

async function renderEditForm(movieId){
    const curMovie = await getMovieDetails(movieId, token);
    const editFormTemplate = createEditFormTemplate(curMovie.title, curMovie.img);
    const editMovieSection = e('section', {id: 'edit-movie', innerHTML: editFormTemplate});
    editMovieSection.querySelector('textarea').value = curMovie.description;
    clearAllExceptNavbar();
    navBar.after(editMovieSection);
    const editMovieForm = document.querySelector('form');
    editMovieForm.addEventListener('submit', async (ev) => {
        ev.preventDefault();
        const title = editMovieForm.querySelector('[name = "title"]').value;
        const description = editMovieForm.querySelector('[name = "description"]').value;
        const img = editMovieForm.querySelector('[name = "imageUrl"]').value;
        if (title == '' || description == '' || img == '') {
            alert('Please fill in all fields');
            return;
        }
        const data = { title, description, img};
        const result = await editMovie(movieId, data, token);
        renderHomePage();
    });

}

async function renderMovieDetails(movieId, ownerId) {
    const movieDetails = await getMovieDetails(movieId, token);
    const movieCard = createMovieDetails(movieDetails.title, movieDetails.img, movieDetails.description);
    const movieDetailsHolder = e('section', {id: 'movie-example', innerHTML: movieCard});
    const [delBtn, editBtn, likeBtn] = movieDetailsHolder.querySelectorAll('a');
    const likedBtn = movieDetailsHolder.querySelector('span');
    likedBtn.style.display = 'none';
    delBtn.addEventListener('click', ev => {
        deleteMovie(movieId, token);
        renderHomePage();
    });
    likeBtn.addEventListener('click', async(ev) => {
        likeMovie({movieId}, token);
        const result = await getLikes(movieId);
        likedBtn.innerText = `Liked: ${result}`;
        likeBtn.style.display = 'none';
        likedBtn.style.display = 'inline-block';
    });
    editBtn.addEventListener('click', ev => {
        renderEditForm(movieId);
    });
    if(ownerId == id){
        delBtn.style.display = 'inline-block';
        editBtn.style.display = 'inline-block';
        likeBtn.style.display = 'none';
    }else{
        delBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'inline-block';
    }
    clearAllExceptNavbar();
    navBar.after(movieDetailsHolder);
}




