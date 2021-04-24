import styles from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Dante_Gabriel_Rossetti_-_Helen_of_Troy.jpg/250px-Dante_Gabriel_Rossetti_-_Helen_of_Troy.jpg',
                    fullName: 'Helena',
                    followed: true,
                    status: 'I am a developer',
                    location: {
                        city: 'Helsinki',
                        country: 'Finland'
                    }
                },

                {
                    id: 2,
                    photoUrl: 'https://fs.kinomania.ru/file/person/5/f0/5f0ac0ef5b87491f2eca4de9bdc907d8.jpeg',
                    fullName: 'John',
                    followed: true,
                    status: 'Hello!',
                    location: {
                        city: 'Los-Altos',
                        country: 'USA'
                    }
                },

                {
                    id: 3,
                    photoUrl: 'https://i.pinimg.com/564x/9d/47/d0/9d47d0b42f1db9af9383a076425b871a.jpg',
                    fullName: 'Marinette',
                    followed: false,
                    status: 'I am a schoolgirl',
                    location: {
                        city: 'Paris',
                        country: 'France'
                    }
                }
            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                     <div>
                         <img src={u.photoUrl} className={styles.userPhoto}/>
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users