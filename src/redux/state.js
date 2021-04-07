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
            ]

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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}




export default store
window.store = store