import React from "react";

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            statusValue: this.props.status
        };
    }

    onChangeClickStatus = () => {
        this.setState({
            status: true,
        });
    };

    onChangeValue = (e) => {
        this.setState({
            statusValue: e.target.value
        });
    }
    
    onChangeBlurStatus = () => {
        this.setState({
            status: false,
        });
        this.props.setStatusToProfileInfo(this.state.statusValue);
    };

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                statusValue: this.props.status
            });
        }
    }

    render() {
        let element = this.state.status === false ?
            (
                <div
                    onClick={this.onChangeClickStatus}
                    className="profile-status"
                >
                    {!this.props.status ? "Введите статус" : this.props.status}
                </div>
            ) : (
                <input
                    autoFocus={true}
                    onChange={this.onChangeValue}
                    defaultValue={this.state.statusValue}
                    onBlur={this.onChangeBlurStatus}
                    type="text"
                />
            );
        return <div>{element}</div>;
    }
}
export default ProfileStatus;
