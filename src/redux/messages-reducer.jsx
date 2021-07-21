const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [

        {
            id: 1,
            name: 'Саша'
        },

        {
            id: 2,
            name: 'Маша'
        },
        {
            id: 3,
            name: 'Вася'
        },
        {
            id: 4,
            name: 'Jane'
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
            message: 'Hello! How are you?'
        }
    ]

}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 5, message: body}]
            }
        default:
            return state
    }

}

export const sendMessageCreator = (newMessageBody) =>
    ({
        type: SEND_MESSAGE,
        newMessageBody
    })



export default messagesReducer