import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {
    console.log(props);
    let string = '';
    if (!props.users) {
        console.log('No props');
    } else {
        string = props.users.fullName
    }
    console.log(string)
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
        </div>
    )
}

export default ProfileInfo;