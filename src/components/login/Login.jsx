import React from "react";
import { Field, reduxForm } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import InputForLogin from "../inputs/Inputs";
import {setLoginAuth} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const lengthMin = minLength(6);

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h1 style={{ color: "white" }}>LOGIN</h1>
            <div>
                <Field
                    name="login"
                    validate={[requireEmail]}
                    component={InputForLogin}
                    type="text"
                    placeholder="email"
                />
            </div>
            <div>
                <Field
                    name="Password"
                    validate={[lengthMin]}
                    component={InputForLogin}
                    type="text"
                    placeholder="password"
                />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
    const submit = (data) => {
        const { login, Password, rememberMe } = data;
        props.setLoginAuth(login, Password, rememberMe);
    };
    return (
        <div>
            <LoginReduxForm onSubmit={submit} />
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginAuth: (mail, password, rememberMe) => dispatch(setLoginAuth(mail, password, rememberMe))
    }
}

export default connect(null, mapDispatchToProps)(Login);
