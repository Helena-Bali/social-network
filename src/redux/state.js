const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
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

        },
        messagesPage: {
            dialogsData: [

                {
                    id: 1,
                    name: 'Милана'
                },

                {
                    id: 2,
                    name: 'Лёва'
                },
                {
                    id: 3,
                    name: 'Оля'
                },
                {
                    id: 4,
                    name: 'Вика'
                }
            ],
            messagesData: [
                {
                    id: 1,
                    message: 'Пошли гулять!'
                },

                {
                    id: 2,
                    message: 'Привет!'
                },
                {
                    id: 3,
                    message: 'Как дела?'
                },
                {
                    id: 4,
                    message: 'Я люблю Милану'
                }
            ],
            newMessageBody: ''



        },
        navBar: {
            allFriends: [
                {
                    id: 1,
                    friend: 'Милана'
                },

                {
                    id: 2,
                    friend: 'Лёва'
                },
                {
                    id: 3,
                    friend: 'Вика'
                }
            ]

        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            debugger
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody
            this._state.messagesPage.newMessageBody = action.body
            this._state.messagesPage.newMessageBody = ''
            this._state.messagesPage.messagesData.push({id: 5, message: body})
            this._callSubscriber(this._state)
        }
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
export const sendMessageCreator = () =>
    ({
        type: SEND_MESSAGE
    })

export const updateNewMessageBodyCreator = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })


export default store
