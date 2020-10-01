import React from "react";
import "./Profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
    if (!props.auth) {
        return <Redirect to="/login"/>
    }
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
