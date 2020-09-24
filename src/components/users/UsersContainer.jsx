import React, { Component } from "react";
import Users from "./Users";
import * as axios from "axios";
import { connect } from "react-redux";
import preloaderGif from "../../assets/img/preloader/HarmoniousOddEyelashpitviper-size_restricted.gif";
import {
    followActionCreator,
    unfollowActionCreator,
    setUsersActionCreator,
    currentPageActionCreator,
    totalItemsActionCreator,
    setPreloaderActionCreator,
} from "../../redux/users-reducer";

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
            &count=${this.props.usersPage.pageItems}`
            )
            .then(({ data }) => {
                this.props.setUsers(data.items);
                // this.props.totalItems(data.totalCount);
            });
    }

    onChangeCount(page) {
        this.props.preloader(true);
        this.props.currentPage(page);
        console.log(this.props);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}
            &count=${this.props.usersPage.pageItems}`
            )
            .then((res) => {
                this.props.preloader(false);
                this.props.setUsers(res.data.items);
            });
    }
    render() {
        const { follow, unfollow, usersPage } = this.props;
        console.log(this.props)
        console.log(follow)
        console.log(usersPage.preloader);
        return (
            <>
                {usersPage.preloader ? (
                    <img className="preloader" src={preloaderGif} alt="" />
                ) : (
                    <Users
                        unfollow={unfollow}
                        follow={follow}
                        usersPage={usersPage}
                        onChangeCount={(page) => this.onChangeCount(page)}
                    />
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id));
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id));
        },
        setUsers: (user) => {
            dispatch(setUsersActionCreator(user));
        },
        currentPage: (page) => {
            dispatch(currentPageActionCreator(page));
        },
        totalItems: (total) => {
            dispatch(totalItemsActionCreator(total));
        },
        preloader: (preloader) => {
            dispatch(setPreloaderActionCreator(preloader));
        },
    };
};

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer);

export default UserContainer;
