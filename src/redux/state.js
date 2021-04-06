let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {
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
}

window.state = state

export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = '';
        rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state