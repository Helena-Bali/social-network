import React from 'react'
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    const newPostElement = React.createRef()
    const addPost = () => {
        props.dispatch({ type: 'ADD-POST'})
    }

const onPostChange = () => {
    const text = newPostElement.current.value
    const action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action)

}
    return (
    <div>
      <div className={classes.postsBlock}>
          <h3>My posts</h3>
      <div>
          <div>
          <textarea onChange={onPostChange} ref={newPostElement}
                    value={props.newPostText}/>
          </div>
          <div>
          <button onClick={addPost}>Add post</button>
          </div>
        </div>
        <div>
          <div className={classes.posts}>
              {props.postsData
                  .map(it => <Post message={it.message} counter={it.likesCount} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPosts