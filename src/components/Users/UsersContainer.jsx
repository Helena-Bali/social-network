import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsersThunkCreator,
    setCurrentPageAC,
    toggleFollowingInProgressAC,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Preloader from "../common/preloader/preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
            {this.props.isFetching ? <Preloader/> : null}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        //users: getUsers(state),
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setCurrentPage: setCurrentPageAC,
        toggleFollowingInProgress: toggleFollowingInProgressAC,
        getUsers: getUsersThunkCreator
    })
)
(UsersContainer)

