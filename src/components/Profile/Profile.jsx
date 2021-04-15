import React from 'react'
import MyPosts from './My posts/MyPosts'
import './Profile.module.css'
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./My posts/MyPostsContainer";


const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>

}

export default Profile