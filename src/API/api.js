import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});

export const profileAPI = {
    getProfile(id) {
        return instance.get(`photos/${id}`)
        .then( response => response.data)
    }
}


export const friendsAPI = {
    getFriends(pageSize, currentPage) {
        return instance.get(`photos?_limit=${pageSize}&_page=${currentPage}`)
        .then( response => response.data)
    }
}

export const usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`posts?limit=${pageSize}&page=${currentPage}`)
        .then( response => response.data)
    }
}
