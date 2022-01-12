import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/memes?sortBy=_createdOn%20desc',
    createMeme: '/data/memes',
    memeById: (id) => `/data/memes/${id}`,
    edit: '/data/memes/',
    memeByUser: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    delete: '/data/memes/'
};

export async function getAllMemes(){
    return api.get(endpoints.all);
}

export async function createMeme(meme){
    return api.post(endpoints.createMeme, meme);
}

export async function deleteMeme(id) {
    return api.del(endpoints.delete + id);
}

export async function getMemeById(id){
    return api.get(endpoints.memeById(id));
}

export async function editMeme(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function getMemesByUser(userId){
    return api.get(endpoints.memeByUser(userId));
}