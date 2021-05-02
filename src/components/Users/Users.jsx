import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";
import React from "react";


let Users = (props) => {
    debugger

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                     <div>
                         <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}
                              alt=""/>
                     </div>
                     <div>
                         {u.followed
                             ? <button onClick={() => {
                                 props.unfollow(u.id)
                             }}>Unfollow</button>
                             : <button onClick={() => {
                                 props.follow(u.id)
                             }}>Follow</button>}

                     </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}
        </div>
    </div>
}

export default Users