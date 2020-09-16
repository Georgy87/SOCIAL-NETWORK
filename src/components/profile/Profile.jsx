import React from "react";
import "./Profile.css";
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            {/* <MyPosts postsPage={props.postsPage} dispatch={props.dispatch} /> */}
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
