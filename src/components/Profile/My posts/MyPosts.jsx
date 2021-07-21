import React from 'react'
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    const newPostElement = React.createRef()
    const addPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
    <div>
      <div className={classes.postsBlock}>
          <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addPost}/>
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
const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
                validate={[required, maxLength10]}/>
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts