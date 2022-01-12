import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/games?sortBy=_createdOn%20desc',
    latest:'/data/games?sortBy=_createdOn%20desc&distinct=category',
    add: '/data/games',
    gameById: (id) => `/data/games/${id}`,
    edit: '/data/games/',
    delete: '/data/games/',
    profile: (userId) => `/data/games?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    getComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    postComment: '/data/comments'
};

export async function getAllItems(){
    return api.get(endpoints.all);
}

export async function getLatestItems(){
    return api.get(endpoints.latest);
}

export async function createItems(data){
    return api.post(endpoints.add, data);
}

export async function getItemById(id){
    return api.get(endpoints.gameById(id));
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

export async function getAllCommentsForGame(gameId){
    return api.get(endpoints.getComments(gameId));
}

export async function postComment(data){
    return api.post(endpoints.postComment, data);
}