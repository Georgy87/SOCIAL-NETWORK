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
                `https://social-network.samuraijs.com/api/1.0/users?page=${
                    this.props.currentPage
                }
            &count=${this.props.usersPage.pageItems}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    onChangeCount(page) {
        this.props.currentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}
            &count=${this.props.usersPage.pageItems}`
            )
            .then((res) => {
                this.props.setUsers(res.data.items);
            });
    }

    render() {
        const { usersPage } = this.props;

        let countPage = Math.ceil(usersPage.totalItems / usersPage.pageItems);
        let pages = [];
        for (let i = 1; i <= countPage; i++) {
            pages.push(i);
        }

        const elementPages = pages.map((page) => {
            return (
                    <div className="pages-items">
                        <span
                            className={usersPage.currentPage === page ? "pages" : ""}
                            key={page}
                            onClick={() => this.onChangeCount(page)}
                        >
                            {page}
                        </span>
                    </div>
            );
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
                <div className="pages-wrap">
                    {elementPages}
                </div>
                <div className="users">{element}</div>
            </>
        );
    }
}

export default Users;
