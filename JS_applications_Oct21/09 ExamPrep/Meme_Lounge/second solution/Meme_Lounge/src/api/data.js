import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/memes?sortBy=_createdOn%20desc',
    add: '/data/memes',
    itemById: (id) => `/data/memes/${id}`,
    edit: '/data/memes/',
    delete: '/data/memes/',
    profile: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getAllItems(){
    return api.get(endpoints.all);
}

export async function createItems(data){
    return api.post(endpoints.add, data);
}

export async function getItemById(id){
    return api.get(endpoints.itemById(id));
}

export async function editItem(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function deleteItem(id) {
    return api.del(endpoints.delete + id);
}

export async function getUserCollection(userId){
    return api.get(endpoints.profile(userId));
}

// export async function getFilteredItems(query){
//     return api.get(endpoints.filter(query));
// }