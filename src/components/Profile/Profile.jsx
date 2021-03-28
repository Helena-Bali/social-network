import React from 'react'
import MyPosts from './My posts/MyPosts'
import './Profile.module.css'
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = () => {
    return <div>
        <ProfileInfo/>
        <MyPosts/>
    </div>

}

export default Profile