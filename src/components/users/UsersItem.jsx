import React from "react";

const UsersItem = (props) => {
    const { user, store, text } = props;
    const changeFollowUnfollow = () => {
        if (user.followed === true) {
            store.unfollow(user.id);
        } else if (user.followed === false) {
            store.follow(user.id);
        }
    };

    return (
        <div onClick={() => changeFollowUnfollow()}>
            <button>{text}</button>
        </div>
    );
};

export default UsersItem;
