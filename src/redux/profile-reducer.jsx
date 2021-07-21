import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {
            id: 1,
            message: 'Привет! Как дела?!',
            likesCount: 25
        },

        {
            id: 2,
            message: 'Это мой первый пост!',
            likesCount: 50
        }
    ],
    profile: null,
    status: ""

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''}

        case SET_USERS_PROFILE: {
            return {...state,
                profile: action.profile}
        }
        case SET_STATUS: {
            return {...state,
                status: action.status}
        }


        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) =>
    ({
        type: ADD_POST,
        newPostText
    })


export const setUsersProfileAC = (profile) =>
    ({
        type: SET_USERS_PROFILE,
        profile
        })

export const setStatusAC = (status) =>
    ({
        type: SET_STATUS,
        status
    })

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfileAC(response.data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatusAC(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatusAC(status));
                }
            });
    }
}
export default profileReducer