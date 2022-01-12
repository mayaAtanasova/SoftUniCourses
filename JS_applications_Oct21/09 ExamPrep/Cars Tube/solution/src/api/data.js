import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endpoints = {
    all: '/data/cars?sortBy=_createdOn%20desc',
    add: '/data/cars',
    itemById: (id) => `/data/cars/${id}`,
    edit: '/data/cars/',
    delete: '/data/cars/',
    profile: (userId) => `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    filter: (query) => `/data/cars?where=year%3D${query}`
};

export async function getAllCars(){
    return api.get(endpoints.all);
}

export async function createCar(data){
    return api.post(endpoints.add, data);
}

export async function getCarById(id){
    return api.get(endpoints.itemById(id));
}

export async function editCar(id, data){
    return api.put(endpoints.edit + id, data);
}

export async function deleteCar(id) {
    return api.del(endpoints.delete + id);
}

export async function getUserCollection(userId){
    return api.get(endpoints.profile(userId));
}

export async function getFilteredItems(query){
    return api.get(endpoints.filter(query));
}