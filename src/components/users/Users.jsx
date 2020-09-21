import React from "react";
import UsersItem from "./UsersItem";
const Users = (props) => {
    const { usersPage } = props;
    const element = usersPage.users.map(user => {
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
