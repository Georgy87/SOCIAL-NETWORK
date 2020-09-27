import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserAuthData } from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        })
        .then(response => {
            this.props.setUserAuthData(response.data.data);
            console.log(response.data.data.id);
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                .then(response => {
                console.log(response.data.photos);
            });
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, { setUserAuthData })(HeaderComponent);
