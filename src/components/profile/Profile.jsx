import React from "react";
import "./Profile.css";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                users={props.users}
                status={props.status}
                setStatusToProfileInfo={props.setStatusToProfileInfo}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
