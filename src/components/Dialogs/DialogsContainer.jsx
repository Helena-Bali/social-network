import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



// const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().messagesPage
//                 const sendMessage = () => {
//                     store.dispatch(sendMessageCreator())
//                 }
//                 const onMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreator(body))
//                 }
//                 return <Dialogs
//                     sendMessage={sendMessage}
//                     updateNewMessageBody={onMessageChange}
//                     messagesPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },

    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer