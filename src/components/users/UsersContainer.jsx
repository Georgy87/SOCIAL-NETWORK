import React, { Component } from "react";
import Users from "./Users";
import { connect } from "react-redux";
import preloaderGif from "../../assets/img/preloader/HarmoniousOddEyelashpitviper-size_restricted.gif";
import {
    follow,
    unfollow,
    setUsers,
    currentPage,
    totalItems,
    preloader,
    transformPage,
} from "../../redux/users-reducer";
import { getUser, getUserPagination } from "../api/api";

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.preloader(true);

        getUser(this.props.currentPage, this.props.usersPage.pageItems).then(
            ({ data }) => {
                // console.log(data);
                this.props.preloader(false);
                this.props.setUsers(data.items);
                // this.props.totalItems(data.totalCount);
            }
        );
    }

    onChangeCount(page) {
        this.props.preloader(true);
        this.props.currentPage(page);

        getUserPagination(page, this.props.usersPage.pageItems).then((res) => {
            this.props.preloader(false);
            this.props.setUsers(res.data.items);
        });
    }

    onChangeNext(page) {
        this.props.preloader(true);
        page++;
        this.props.currentPage(page);
        this.props.transformPage(page);

        getUserPagination(page, this.props.usersPage.pageItems).then((res) => {
            this.props.preloader(false);
            this.props.setUsers(res.data.items);
        });
    }

    onChangePrev(page) {
        this.props.preloader(true);
        page--;
        this.props.currentPage(page);
        this.props.transformPage(page);
        // if (page < 1) {
        //     page = this.props.usersPage.totalItems;
        //     page--;
        //     this.props.currentPage(page);
        //     this.props.transformPage(page);
        // }
        // console.log(this.props.usersPage.totalItems)

        getUserPagination(page, this.props.usersPage.pageItems).then((res) => {
            this.props.preloader(false);
            this.props.setUsers(res.data.items);
        });
    }

    render() {
        const { follow, unfollow, usersPage } = this.props;

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
                        onChangeNext={(page) => this.onChangeNext(page)}
                        onChangePrev={(page) => this.onChangePrev(page)}
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

const UserContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    currentPage,
    totalItems,
    preloader,
    transformPage,
})(UsersContainer);

export default UserContainer;
