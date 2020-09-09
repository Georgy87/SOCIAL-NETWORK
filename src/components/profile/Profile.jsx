import React from "react";
import "./Profile.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />

            {/* <MyPosts postMessages={props.postMessages} /> */}
        </div>
    );
};

export default Profile;
