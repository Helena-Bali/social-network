import React from 'react'
import './Post.module.css'
import classes from './Post.module.css'

const Post = (props) => {
  return <div className={classes.item}>
    <img src='https://bipbap.ru/wp-content/uploads/2020/04/Edinorog-risunki-dlya-srisovki-krasivye-prikolnye-i-interesnye-18.jpg' />
    {props.message}
    <div>
      <span>Like</span> {props.counter}
    </div>
  </div>


}

export default Post