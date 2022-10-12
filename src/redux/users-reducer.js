import {usersAPI} from './../API/api';

const SET_USERS = 'SET-USERS';
const TOTAL_COUNT = 'TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    // totalUsersCount: 30, тут ошибка, надо вычислить эту ошибку
    currentPage: 3,
    isFetching: false,
    followingInProgress: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, followingInProgress: action.isFetching }
        }
    }
    return state;
}

export const setUsers = (users) => ({
    type: 'SET-USERS',
    users,
})

export const totalUsersCount = (count) => ({
    type: 'TOTAL-COUNT',
    count,
})

export const setCurrentPage = (currentPage) => ({
    type: 'SET-CURRENT-PAGE',
    currentPage,
})

export const toggleIsFetching = (isFetching) => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching,
})

export const toggleFollowingProgress = (isFetching) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
})


export const getUsersThunkCreator = (pageSize, currentPage) => {

   return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(toggleFollowingProgress(true))
        usersAPI.getUsers(pageSize, currentPage)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(toggleFollowingProgress(false));
                dispatch(setUsers(data));
            })
    }
}

export default usersReducer;
