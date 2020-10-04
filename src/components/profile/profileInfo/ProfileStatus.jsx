import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            statusValue: ""
        };
    }

    onChangeClickStatus = () => {
        this.setState({
            status: true,
        });
    };

    onChangeBlurStatus = () => {
        this.setState({
            status: false,
        });
        this.props.setStatusToProfileInfo(this.state.statusValue);
    };

    onChangeValue = (e) => {
        this.setState({
            statusValue: e.target.value
        });
    }

    render() {

        let element = this.state.status === false ?
            (
                <div
                    onClick={this.onChangeClickStatus}
                    className="profile-status"
                >
                    {this.props.status}
                </div>
            ) : (
                <input
                    autoFocus={true}
                    onChange={this.onChangeValue}
                    defaultValue={this.props.status}
                    onBlur={this.onChangeBlurStatus}
                    type="text"
                />
            );
        return <div>{element}</div>;
    }
}
export default ProfileStatus;
