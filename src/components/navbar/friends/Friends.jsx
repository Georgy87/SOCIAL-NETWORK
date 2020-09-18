import React from "react";
import "./Friends.css";

const Friends = (props) => {
    const elementFriends = props.state.friends.map((item) => {
        console.log(item);
        const { name, id, url } = item;
        return <Friend name={name} key={id} url={url} />;
    });
    return <>{elementFriends}</>;
};

const Friend = ({ name, url }) => {
    return (
        <div>
            <div className="friends-item">
                <img src={url} alt="" />
                <div>{name}</div>
            </div>
        </div>
    );
};

export default Friends;
