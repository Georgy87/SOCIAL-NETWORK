import React, { Component } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import preloaderGif from "../../assets/img/preloader/HarmoniousOddEyelashpitviper-size_restricted.gif";
import {
    follow,
    unfollow,
    currentPage,
    totalItems,
    transformPage,
    setArrayForDisable,
    getUsersActionCreator,
    changeUsersActionCreator,
    onChangeUsersNextActionCreator,
    onChangeUsersPrevActionCreator
} from "../../redux/users-reducer";
// import { withAuthRedirect } from "../hoc/WithAuthRedirect";
import { getAuth, getUsers } from "../reselectors/user-reselectors";
import { compose } from 'redux';

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.getUsersActionCreator(this.props.currentPage, this.props.usersPage.pageItems);
    }

    onChangeCount(page) {
        this.props.changeUsersActionCreator(page, this.props.usersPage.pageItems);
    }

    onChangeNext(page) {
        this.props.onChangeUsersNextActionCreator(page, this.props.usersPage.pageItems);
    }

    onChangePrev(page) {
        this.props.onChangeUsersPrevActionCreator(page, this.props.usersPage.pageItems);
    }

    render() {
        const { follow, unfollow, usersPage, setArrayForDisable, auth } = this.props;

        return (
            <>
                {usersPage.preloader ? (
                    <img className="preloader" src={preloaderGif} alt="" />
                ) : (
                    <Users
                        auth={auth}
                        unfollow={unfollow}
                        follow={follow}
                        usersPage={usersPage}
                        onChangeCount={(page) => this.onChangeCount(page)}
                        onChangeNext={(page) => this.onChangeNext(page)}
                        onChangePrev={(page) => this.onChangePrev(page)}
                        setArrayForDisable={setArrayForDisable}
                    />
                )}
            </>
        );
    }
}

// const redirectAuthMapToProps = connect(mapAuthToProps)(withAuthRedirect(UsersContainer));

const mapStateToProps = (state) => {
    return {
        auth: getAuth(state),
        usersPage: getUsers(state),
    };
};

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        currentPage,
        totalItems,
        transformPage,
        setArrayForDisable,
        getUsersActionCreator,
        changeUsersActionCreator,
        onChangeUsersNextActionCreator,
        onChangeUsersPrevActionCreator
    })
)(UsersContainer);
