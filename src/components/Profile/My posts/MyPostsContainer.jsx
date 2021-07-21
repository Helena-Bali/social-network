import React from 'react'
import './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState()
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 const onPostChange = (text) => {
//                     const action = updateNewPostTextActionCreator(text);
//                     store.dispatch(action)
//
//                 }
//                 return  <MyPosts updateNewPostText={onPostChange}
//                          addPost={addPost}
//                          postsData={state.profilePage.postsData}
//                          newPostText={state.profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
         addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },

    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer