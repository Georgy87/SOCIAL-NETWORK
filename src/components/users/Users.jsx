import React, { Component } from "react";
import UsersItem from "./UsersItem/UsersItem";
import * as axios from "axios";
import "./Users.css";
class Users extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
                &count=${3}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    onChangeCount(page) {
        this.props.currentPage(page);
    }

    render() {
        const { usersPage } = this.props;
        let countPage = usersPage.totalItems / usersPage.pageItems;
        let pages = [];
        for (let i = 1; i < countPage; i++) {
            pages.push(i);
        }
        const elementPages = pages.map((page) => {
            return <span key={page} onClick={() => this.onChangeCount(page)}>{page}</span>;
        });

        const element = usersPage.users.map((user) => {
            return user.followed ? (
                <UsersItem
                    text={"follow"}
                    key={user.id}
                    user={user}
                    store={this.props}
                />
            ) : (
                <UsersItem
                    text={"unfollow"}
                    key={user.id}
                    user={user}
                    store={this.props}
                />
            );
        });
        return (
            <>
                {elementPages}
                <div className="users">{element}</div>
            </>
        );
    }
}

export default Users;
