import React, { useState, useEffect } from "react";

const ProfileStatusHooks = (props) => {
    const [status, setStatus] = useState(false);
    const [statusValue, setStatusValue] = useState(props.status);
    useEffect(() => {
        setStatusValue(props.status);
    }, [props.status]);

    const onChangeClickStatus = () => {
        setStatus(true);
    };

    const onChangeValue = (e) => {
        setStatusValue(e.target.value);
    };

    const onChangeBlurStatus = () => {
        setStatus(false);
        props.setStatusToProfileInfo(statusValue);
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             statusValue: this.props.status,
    //         });
    //     }
    // }

    let element =
        status === false ? (
            <div onClick={onChangeClickStatus} className="profile-status">
                {!props.status ? "Введите статус" : props.status}
            </div>
        ) : (
            <input
                autoFocus={true}
                onChange={onChangeValue}
                defaultValue={statusValue}
                onBlur={onChangeBlurStatus}
                type="text"
            />
        );
    return <div>{element}</div>;
};

export default ProfileStatusHooks;
