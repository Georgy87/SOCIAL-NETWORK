import { Form, Field } from "react-final-form";
import React from "react";
const Login = (props) => {
    return (
        <Form
            // initialValues={{
            //     firstName: "Dan",
            // }}
            onSubmit={(values) => {
                // send values to the cloud

            }}
            validate={(values) => {
                console.log(values);
                // do validation here, and return errors object
            }}
        >
            {({ handleSubmit, pristine, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            disabled={pristine || submitting}
                            onClick={form.reset}
                        >
                            Clear Values
                        </button>
                    </div>
                </form>
            )}
        </Form>
    );
};

// const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

// const Login = (props) => {
//     const onSubmit = (formData) => {
//         console.log(formData);
//     }

//     return <div>
//         <h1>Login</h1>
//         <LoginReduxForm onSubmit={onSubmit} />
//     </div>
// }

export default Login;
