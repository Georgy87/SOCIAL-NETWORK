import React from "react";
import "./Profile.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({ postMessages }) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postMessages={postMessages} />
        </div>
    );
};

export default Profile;
