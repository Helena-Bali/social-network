import React from 'react'
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            message: 'Привет! Как дела?!',
            likesCount: 25
        },

        {
            id: 2,
            message: 'Это мой первый пост!',
            likesCount: 50
        }
    ]

    let postsElements = postsData
        .map(it => <Post message={it.message} counter={it.likesCount} />)

    return (
    <div>
      <div className={classes.postsBlock}>
          <h3>My posts</h3>
      <div>
          <div>
          <textarea></textarea>
          </div>
          <div>
          <button>Add post</button>
          </div>
        </div>
        <div>
          <div className={classes.posts}>
              {postsElements}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPosts