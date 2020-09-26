import React from "react";
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";
import "./UsersItem.css";
import { NavLink } from "react-router-dom";

const UsersItem = (props) => {
    const { user, follow, unfollow, text } = props;
    const changeFollowUnfollow = () => {
        if (user.followed === true) {
            props.store.unfollow(user.id);
        } else if (user.followed === false) {
            props.store.follow(user.id);
        }
    };

    if (user.photos.small === null) {
        user.photos.small = photo;
    }

    return (
        <div className="user-content">
            <div className="user-item">
                <NavLink to={`/profile/${user.id}`}>
                    <img src={photo} alt="user-photo" />
                    <div className="user-title">{user.name}</div>
                </NavLink>
                <button onClick={() => changeFollowUnfollow()}>{text}</button>
            </div>
        </div>
    );
};

export default UsersItem;
