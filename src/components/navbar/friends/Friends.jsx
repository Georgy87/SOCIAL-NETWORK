import React from "react";
import "./Friends.css";

const Friends = ({url, name}) => {
    return (
        <div>
            <div className="friends-item">
                <img src={url} alt=""/>
                <div>{name}</div>
            </div>
        </div>
    )
}

export default Friends;