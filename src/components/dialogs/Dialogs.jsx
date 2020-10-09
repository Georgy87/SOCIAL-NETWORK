import React from "react";
import "./Dialog.css";
import DialogItem from "./DialogItem/DialogsItem";
import { Field, reduxForm } from "redux-form";

const Dialog = (props) => {
    const elementNames = props.state.dialogNames.map((item) => {
        const { name, id, message } = item;
        return <DialogItem key={id} name={name} id={id} message={message} />;
    });

    const onAddMessage = (message, e) => {
        if (message || e.key == "Enter") {
            props.addMessage(message);
        }
    };

    return (
        <div>
            <div className="dialog">
                <div className="dialog-item">{elementNames}</div>
            </div>
            <MessageReduxForm onSubmit={onAddMessage} />
        </div>
    );
};

const MessageForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
            <div>
                <Field name="message" component="input" type="text" />
            </div>
        </form>
    );
};

const MessageReduxForm = reduxForm({ form: "message" })(MessageForm);

export default Dialog;
