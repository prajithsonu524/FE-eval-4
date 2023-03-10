export const CONTENT_BACKEND_URL = 'http://localhost:8080/contentTypes';
export const AUTHBASEURL = 'http://localhost:5000/';
export const GET_ALL_CONTENT = {
    method: 'GET',
    url: '/getall'
}
export const ADD_CONTENT_TYPE = {
    method: 'POST',
    url: '/create'
}
export const ADD_FIELD = (id) => {
    return {
        method: 'POST',
        url: `/addfield/${id}`
    }
}
export const DELETE_FIELD = (id) => {
    return {
        method: 'DELETE',
        url: `/deletefield/${id}`
    }
}
export function LOGIN(email, password) {
    return {
        url: 'auth/login',
        method: 'POST',
        baseURL: AUTHBASEURL,
        body: {
            username: email,
            password: password
        }
    };
}
export function SIGNUP(email, password) {
    return {
        url: 'auth/user',
        method: 'POST',
        baseURL: AUTHBASEURL,
        body: {
            username: email,
            password: password
        }
    };
}
