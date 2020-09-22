import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import * as axios from "axios";

const Users = (props) => {
    const { usersPage } = props;

    if (usersPage.users.length === 0) {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/users")
            .then((res) => {
                props.setUsers(res.data.items);
            });
    }

    const element = usersPage.users.map((user) => {
        console.log(user);
        return user.followed ? (
            <UsersItem
                text={"follow"}
                key={user.id}
                user={user}
                store={props}
            />
        ) : (
            <UsersItem
                text={"unfollow"}
                key={user.id}
                user={user}
                store={props}
            />
        );
    });

    return (
        <div>
            <div className="dialog-content">{element}</div>
            <hr />
        </div>
    );
};

export default Users;
