import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    onChangeClickStatus = () => {
        this.setState({
            status: true
        });
    }

    onChangeBlurStatus = () => {
        this.setState({
            status: false
        });
    }

    render() {
        console.log(this.props);
    let element = this.state.status === false ?
            <div onClick={this.onChangeClickStatus} className="profile-status">{this.props.status}</div>
            : <input autoFocus={true} defaultValue={this.props.status} onBlur={this.onChangeBlurStatus} type="text"/>;
        return (
            <div>
                {element}
            </div>
        )
    }
}
export default ProfileStatus;
