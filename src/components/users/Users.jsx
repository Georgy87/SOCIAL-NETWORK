import React from "react";
import UsersItem from "./UsersItem/UsersItem";
import "./Users.css";

const Users = (props) => {
    const { usersPage, follow, unfollow } = props;
    
    const countPage = Math.ceil(usersPage.totalItems / usersPage.pageItems);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i);
    }

    const elementPages = pages.map((page) => {

        return (
            <>
                <div className="pages-items">
                    <span
                        className={usersPage.currentPage === page ? "pages" : ""}
                        key={page}
                        onClick={() => props.onChangeCount(page)}
                    >
                        {page}
                    </span>
                </div>
            </>
        );
    });

    const element = usersPage.users.map((user) => {

        return user.followed ? (
            <UsersItem
                text={"follow"}
                key={user.id}
                user={user}
                store={props}
                follow={follow}
            />
        ) : (
            <UsersItem
                text={"unfollow"}
                key={user.id}
                user={user}
                store={props}
                unfollow={unfollow}
            />
        );
    });

    let obj = {
        transform: `translateX(-${usersPage.transformPage - 1}%)`
    }

    return (
        <>
            <div className="pages-wrap">
                <div className="pages-content" style={obj}>
                    {elementPages}
                </div>
            </div>
            <button onClick={() => props.onChangePrev(usersPage.currentPage)}>prev</button>
            <button onClick={() => props.onChangeNext(usersPage.currentPage)}>next</button>
            <div className="users">{element}</div>
        </>
    );
};

export default Users;
