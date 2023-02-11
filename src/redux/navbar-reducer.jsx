let initialState = {
    allFriends: [
        {
            id: 1,
            friend: 'John'
        },

        {
            id: 2,
            friend: 'Helen'
        },
        {
            id: 3,
            friend: 'Mary'
        }
    ]
}

const navbarReducer = (state = initialState, action) => {
    return state
}

export default navbarReducer
