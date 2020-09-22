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
        if (this.props.usersPage.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then((res) => {
                    this.props.setUsers(res.data.items);
                });
        }
    }

    render() {
        console.log(this.props);
        const { usersPage } = this.props;
        console.log(usersPage);
        const element = usersPage.users.map((user) => {
            console.log(user);
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
        return <div className="users">{element}</div>;
    }
}

export default Users;
