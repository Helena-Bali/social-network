const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

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
    newPostText: '',
    profile: null

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''}
        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText}
            }
        case SET_USERS_PROFILE: {
            return {...state,
                profile: action.profile}
        }

        default:
            return state;
    }
}

export const addPostActionCreator = () =>
    ({
        type: ADD_POST
    })

export const updateNewPostTextActionCreator = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    })

export const setUsersProfileAC = (profile) =>
    ({
        type: SET_USERS_PROFILE,
        profile
        })

export default profileReducer