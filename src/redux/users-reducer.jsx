import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccessAC = (userId) =>
    ({
        type: FOLLOW,
        userId
    })

export const unfollowSuccessAC = (userId) =>
    ({
        type: UNFOLLOW,
        userId
    })

export const setUsersAC = (users) =>
    ({
        type: SET_USERS,
        users
    })

export const setCurrentPageAC = (currentPage) =>
    ({
        type: SET_CURRENT_PAGE,
        currentPage
    })

export const setTotalUsersCountAC = (totalUsersCount) =>
    ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    })

export const toggleIsFetchingAC = (isFetching) =>
    ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    })

export const toggleFollowingInProgressAC = (isFetching, userId) =>
    ({
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isFetching,
        userId
    })

export const getUsersThunkCreator = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items));
                dispatch(setTotalUsersCountAC(data.totalCount));
            })
        dispatch(setCurrentPageAC(page))
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccessAC(userId))
                }
                dispatch(toggleFollowingInProgressAC(false, userId))
            });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgressAC(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccessAC(userId))
                }
                dispatch(toggleFollowingInProgressAC(false, userId))
            });
    }
}

export default usersReducer
