import React from "react";
import { Field, reduxForm } from "redux-form";
import { requireEmail, minLength } from "../validate/validateInput";
import InputForLogin from "../inputs/Inputs";

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
