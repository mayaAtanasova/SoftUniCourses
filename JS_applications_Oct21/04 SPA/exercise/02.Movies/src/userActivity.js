import { makeRequest } from './httpRequests.js';

export async function registerUser(data) {
    const result = await makeRequest('post', 'http://localhost:3030/users/register', null, data);
    return result;
}

export async function loginUser(data) {
    const result = await makeRequest('post', 'http://localhost:3030/users/login', null, data);
    return result;
}

export async function logoutUser(token) {
    makeRequest('get', 'http://localhost:3030/users/logout', null, null, token);
}

export async function getAllMovies() {
    const data = await makeRequest('get', 'http://localhost:3030/data/movies', null, null);
    return data;
}

export async function addMovie(data, token) {
    const result = await makeRequest('post', 'http://localhost:3030/data/movies', null, data, token);
    return result;
}

export async function getMovieDetails(id, token) {
    const result = await makeRequest('get', 'http://localhost:3030/data/movies', id, null, token);
    return result;
}

export async function editMovie(id, data, token) {
    const result = await makeRequest('put', 'http://localhost:3030/data/movies', id, data, token);
    return result;
}

export async function deleteMovie(id, token) {
    const result = await makeRequest('delete', 'http://localhost:3030/data/movies', id, null, token);
}

export async function likeMovie(movieId, token) {
    const result = await makeRequest('post', 'http://localhost:3030/data/likes', null, movieId, token);
    return result;
}

export async function getLikes(movieId) {
    const result = await makeRequest('get', `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`, null, null, null);
    return result;
}