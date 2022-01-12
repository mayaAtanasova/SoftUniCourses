import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/games?sortBy=_createdOn%20desc',
    latest:'/data/games?sortBy=_createdOn%20desc&distinct=category',
    add: '/data/games',
    itemById: (id) => `/data/games/${id}`,
    edit: '/data/games/',
    delete: '/data/games/',
    allComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createComment: '/data/comments'
};

export async function getAllGames(){
    return api.get(endpoints.all);
}

export async function getLatestGames(){
    return api.get(endpoints.latest);
}

export async function createGame(data){
    return api.post(endpoints.add, data);
}

export async function getGameById(id){
    return api.get(endpoints.itemById(id));
}

export async function editGame(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function deleteGame(id) {
    return api.del(endpoints.delete + id);
}

export async function getAllComments(gameId){
    return api.get(endpoints.allComments(gameId));
}

export async function postComments(data){
    return api.post(endpoints.createComment, data);
}