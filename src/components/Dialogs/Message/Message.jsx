import React from 'react'
import classes from './../Dialogs.module.css'


const Message = (props) => {
    const newMessageElement = React.createRef()
    const sendMessage = () => {
        const text = newMessageElement.current.value
        alert(text)
    }
    return (<div>
            <div className={classes.message}>{props.message}</div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>

        </div>
    )
}

export default Message