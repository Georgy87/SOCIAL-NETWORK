import React from "react";
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";
import "./UsersItem.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { followApi } from "../../api/api";

const UsersItem = (props) => {
    const { user, text } = props;

    const changeFollowUnfollow = () => {
        if (user.followed === true) {
            followApi.deleteFollow(user.id).then(data => {
                if(data.resultCode === 0) {
                    props.store.unfollow(user.id);
                }
            });

        } else if (user.followed === false) {
            followApi.postFollow(user.id).then(data => {
                if(data.resultCode === 0) {
                    props.store.follow(user.id);
                }
            });
        }
    };

    return (
        <div className="user-content">
            <div className="user-item">
                <NavLink to={`/profile/${user.id}`}>
                    <img src={!user.photos.small ? photo : user.photos.small } alt="user-photo" />
                    <div className="user-title">{user.name}</div>
                </NavLink>
                <button onClick={() => changeFollowUnfollow()}>{text}</button>
            </div>
        </div>
    );
};

export default UsersItem;
