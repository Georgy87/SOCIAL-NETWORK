import React from "react";
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";
import "./UsersItem.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

const UsersItem = (props) => {
    const { user, follow, unfollow, text } = props;

    const changeFollowUnfollow = () => {
        if (user.followed === true) {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "2e2ad3cb-84a8-40d2-844a-fb383504df08"
                }
            }).then(res => {
                if(res.data.resultCode === 0) {
                    props.store.unfollow(user.id);
                }
            });

        } else if (user.followed === false) {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "2e2ad3cb-84a8-40d2-844a-fb383504df08"
                }
            }).then(res => {
                if(res.data.resultCode === 0) {
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
