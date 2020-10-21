import React from "react";
import "./ProfileInfo.css";
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    let string = "";
    let newPhoto = "";
    if (!props.users) {
        console.log("No props");
    } else {
        string = props.users.fullName;
        newPhoto = props.users.photos.small;
    }

    return (
        <div>
            <div className="poster">
                {/* <div className="poster-descr">SOCIAL-NETWORK</div> */}
            </div>
            <div className="profile">
                <div className="profile-content">
                    <img src={newPhoto === null ? photo : newPhoto} alt="" />
                    <div className="profile-descr">{string}</div>
                    <ProfileStatusHooks status={props.status} setStatusToProfileInfo={props.setStatusToProfileInfo}/>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
