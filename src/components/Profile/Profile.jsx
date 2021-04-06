import React from 'react'
import MyPosts from './My posts/MyPosts'
import './Profile.module.css'
import ProfileInfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}
                 newPostText={props.state.newPostText}
                 addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}/>
    </div>

}

export default Profile