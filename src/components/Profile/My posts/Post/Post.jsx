import React from 'react'
import './Post.module.css'
import avatar from '../../../../assets/images/avatar2.png'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img alt='avatar' src={avatar}/>
            {props.message}
            <div>
                <span> Like </span> {props.counter}
            </div>
        </div>
    )
}

export default Post
