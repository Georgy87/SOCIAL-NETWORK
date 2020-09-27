import React from 'react';
import './ProfileInfo.css';
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";

const ProfileInfo = (props) => {

    let string = '';
    let newPhoto = '';
    if (!props.users) {
        console.log('No props');
    } else {
        string = props.users.fullName;
        newPhoto = props.users.photos.small;
    }

    const obj = {
        color: 'white'
    }

    return (
        <div>
            <div className="poster">
                <div className="descr">
                    SOCIAL-NETWORK
                </div>
            </div>
            <div style={obj}>{string}</div>
            <img src={newPhoto === null ? photo : newPhoto} alt=""/>
        </div>
    )
}

export default ProfileInfo;