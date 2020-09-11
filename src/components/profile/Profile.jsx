import React from "react";
import "./Profile.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
    console.log(props);
    return (
        <div>
            <ProfileInfo />

            <MyPosts postsPage={props.postsPage} addPost={props.addPost} changeText={props.changeText}/>
        </div>
    );
};

export default Profile;
