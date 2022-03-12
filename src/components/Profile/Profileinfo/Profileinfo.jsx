import React from 'react'
import classes from './ProfileInfo.module.css'
// import Preloader from "../../common/preloader/preloader";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return 'Log in, please'
        //<Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://besthqwallpapers.com/Uploads/20-7-2019/100329/thumb2-pink-roses-bouquet-4k-bokeh-bouquet-of-roses-pink-flowers.jpg'/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <div><button>Имя пользователя:</button> {props.profile.fullName}</div>
                <div ><button>Обо мне:</button> {props.profile.aboutMe}</div>
                <div><button>Контакты:</button>
                    <div className={classes.contactsStyles}>
                        <div  > Facebook: {props.profile.contacts.facebook}</div>
                        <div> Website: {props.profile.contacts.website}</div>
                        <div> Vk: {props.profile.contacts.vk}</div>
                        <div> Twitter: {props.profile.contacts.twitter}</div>
                        <div> Instagram: {props.profile.contacts.instagram}</div>
                        <div> Youtube: {props.profile.contacts.youtube}</div>
                        <div> Github: {props.profile.contacts.github}</div>
                    </div>
                </div>
                <div><button>Я ищу работу:</button> {props.profile.lookingForAJob}
                    {props.profile.lookingForAJobDescription}</div>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo