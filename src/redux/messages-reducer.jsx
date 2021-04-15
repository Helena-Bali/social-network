const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = action.body
            state.newMessageBody = ''
            state.messagesData.push({id: 5, message: body})
            return state;

        default:
            return state
    }

}

export const sendMessageCreator = () =>
    ({
        type: SEND_MESSAGE
    })

export const updateNewMessageBodyCreator = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })

export default messagesReducer