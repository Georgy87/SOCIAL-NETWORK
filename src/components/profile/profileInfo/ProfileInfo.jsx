import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    console.log(props.users);
    if (!props.users) {
        return '';
    }
    return (
        <div>
            <div className="poster">
                <div className="descr">
                    SOCIAL-NETWORK
                </div>
            </div>
            <div>{props.users.fullName}</div>
            {/* <img src={props.users.photos.small} alt=""/> */}
        </div>
    )

}

export default ProfileInfo;