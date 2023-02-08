const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [

        {
            id: 1,
            name: 'Jim'
        },

        {
            id: 2,
            name: 'Rose'
        },
        {
            id: 3,
            name: 'Harry'
        },
        {
            id: 4,
            name: 'Jane'
        }
    ],
    messagesData: [
        {
            id: 1,
            message: 'Let\'s go for a walk!'
        },

        {
            id: 2,
            message: 'Hi!'
        },
        {
            id: 3,
            message: 'Hi! How\'s your day?'
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
