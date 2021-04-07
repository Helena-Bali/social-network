import React from 'react'
import MyPosts from './My posts/MyPosts'
import './Profile.module.css'
import ProfileInfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPosts postsData={props.state.postsData}
                 newPostText={props.state.newPostText}
                 dispatch={props.dispatch} />
    </div>

}

export default Profile