import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {

    if (!props.users) {
        return <img src="" alt=""/>;
    }
        console.log(props.users.photos.large)


    return (
        <div>
            <div className="poster">
                <div className="descr">
                    SOCIAL-NETWORK
                </div>
            </div>
            <img src={props.users.photos.small} alt=""/>
        </div>
    )

}

export default ProfileInfo;