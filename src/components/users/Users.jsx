import React from "react";
import UsersItem from "./UsersItem";
const Users = (props) => {
    const { usersPage } = props;
    let users = [
        { id: 1, name: "Anton", followed: true, text: "follow" },
        { id: 2, name: "Evgeniy", followed: false, text: "unfollow"  },
        { id: 3, name: "Helena", followed: false, text: "unfollow"  },
    ]
    if (usersPage.users.length === 0) {
        props.setUsers(users);
    }

    const element = usersPage.users.map(user => {
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
