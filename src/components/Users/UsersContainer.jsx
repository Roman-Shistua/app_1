import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
    setUsers, totalUsersCount, setCurrentPage,
    toggleIsFetching, toggleFollowingProgress,
    getUsersThunkCreator
} from "../../redux/users-reducer.js";
import Loader from "../UI/Loader";


const UsersContainer = (props) => {

    let onPageChanget = (pageNumber) => {
        props.setCurrenPage(pageNumber)
    }

    let getUsers = () => {
        if (props.users.length === 0) {
            props.getUsersThunkCreator()
            // props.toggleIsFetching(true)
            // props.toggleFollowingProgress(true)
            // usersAPI.getUsers(props.pageSize, props.currentPage)
            //     .then(data => {
            //         props.toggleIsFetching(false);
            //         props.toggleFollowingProgress(false);
            //         props.setUsers(data);
            //     })

        }
    }


    return <>
        {props.isFetching ? <Loader /> : null}
        <Users totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            users={props.users}
            onPageChanget={onPageChanget}
            getUsers={getUsers}
            followingInProgress={props.followingInProgress}
        />
    </>

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps, {
    setUsers,
    totalUsersCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsersThunkCreator,
})(UsersContainer)


// let mapDispatchToProps = (dispatch) => {
//     return {
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },

//         totalUsersCount: (count) => {
//             dispatch(totalUsersCountAC(count))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }