const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ''

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

export default profileReducer