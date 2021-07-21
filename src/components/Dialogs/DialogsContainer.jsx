import React from 'react'
import {sendMessageCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



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
        messagesPage: state.messagesPage,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },

    }
}

export default compose(connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)

