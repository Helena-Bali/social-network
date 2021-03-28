import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://besthqwallpapers.com/Uploads/20-7-2019/100329/thumb2-pink-roses-bouquet-4k-bokeh-bouquet-of-roses-pink-flowers.jpg'/>
        </div>
        <div className={classes.descriptionBlock}>
            avatar + description
        </div>
    </div>

}

export default ProfileInfo