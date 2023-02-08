import React from 'react'
import './Profile.module.css'
import ProfileInfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./My posts/MyPostsContainer";


const Profile = (props) => {

    return <div>
        <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}/>
        <MyPostsContainer
            //store={props.store}
        />
    </div>

}

export default Profile
