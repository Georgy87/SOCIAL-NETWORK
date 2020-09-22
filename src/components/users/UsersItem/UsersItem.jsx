import React from "react";
import photo from "../../../assets/img/avatar-computer-icons-clip-art-avatar.jpg";
import "./UsersItem.css";
const UsersItem = (props) => {
    const { user, store, text } = props;

    const changeFollowUnfollow = () => {
        if (user.followed === true) {
            store.unfollow(user.id);
        } else if (user.followed === false) {
            store.follow(user.id);
        }
    };

    if (user.photos.small === null) {
        user.photos.small = photo;
    }

    return (
        <div className="user-content">
            <div className="user-item">
                <img src={photo} alt="user-photo" />
                {user.name}
                <button onClick={() => changeFollowUnfollow()}>{text}</button>
            </div>
        </div>
    );
};

export default UsersItem;
