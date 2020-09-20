import React from "react";

const UsersItem = (props) => {
    console.log(props)
    const func = (props) => {
        if (props.props.followed === true) {
            props.store.unfollow(props.props.id);
        } else if (props.props.followed === false) {
            props.store.follow(props.props.id);
        }
        // } else if (props.props.followed === false) {
        //     props.store.follow(props.props.id);
        // }
    }

    return (
        <div onClick={() => func(props)}>
            <button>{props.text}</button>
        </div>
    )
}

export default UsersItem;