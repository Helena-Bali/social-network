import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import { Redirect } from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
    let state = props.messagesPage

    const dialogsElements = state.dialogsData
        .map(it => <DialogItem key={it.id} name={it.name} id={it.id}/>)

    const messagesElements = state.messagesData
        .map(it => <Message key={it.id} message={it.message}/>)

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }
   // if(!props.isAuth) return <Redirect to={"/Login"}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            <Field component={Textarea}
                   validate={[required, maxLength50]}
                   name={"newMessageBody"}
                   placeholder={"Enter your message"}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs
