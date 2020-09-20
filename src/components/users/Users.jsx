import React from "react";
import UsersItem from "./UsersItem";
const Users = (props) => {

    const element = props.usersPage.users.map(user => {
        console.log(user);
        return user.followed ? <UsersItem text={'follow'} key={user.id} props={user} store={props}/> : <UsersItem text={'unfollow'} key={user.id} props={user} store={props}/>;
    })

    return (
        <div>
            <div className="dialog-content">
                {element}
            </div>
            <hr/>
        </div>
    )
}

export default Users;