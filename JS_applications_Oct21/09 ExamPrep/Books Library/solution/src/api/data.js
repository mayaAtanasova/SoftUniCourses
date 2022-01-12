import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/books?sortBy=_createdOn%20desc',
    add: '/data/books',
    itemById: (id) => `/data/books/${id}`,
    edit: '/data/books/',
    delete: '/data/books/',
    itemsByUser: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likes: '/data/likes',
    likesById: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&coun`,
    likesByUser: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllBooks(){
    return api.get(endpoints.all);
}

export async function createBook(data){
    return api.post(endpoints.add, data);
}

export async function deleteBook(id) {
    return api.del(endpoints.delete + id);
}

export async function getBookById(id){
    return api.get(endpoints.itemById(id));
}

export async function editBook(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function getBooksByUser(userId){
    return api.get(endpoints.itemsByUser(userId));
}

export async function likeBook({bookId}){
    return api.post(endpoints.likes, {bookId});
}

export async function getTotalLikes(id){
    return api.get(endpoints.likesById(id));
}

export async function getLikesByUser(bookId, userId){
    return api.get(endpoints.likesByUser(bookId, userId));
}
