import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <h1 style={{ color: "white" }}>LOGIN</h1>
            <div>
                <Field name="login" component="input" type="text" />
            </div>
            <div>
                <Field name="Password" component="input" type="text" />
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
    const submit = (val) => {
        console.log(val);
    };

    return (
        <div>
            <LoginReduxForm onSubmit={submit} />
        </div>
    );
};

export default Login;
