import React from 'react'
import classes from './ProfileInfo.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div className={classes.loginStyle}>Log in, please</div>
    }
    return (
        <div>
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
                <img alt='avatar' src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo
