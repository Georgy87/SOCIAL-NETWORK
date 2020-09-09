import React from "react";
import "./Dialog.css";
import DialogItem from './DialogItem/DialogsItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialog = (props) => {
    
    const elementNames =  props.stateDialog.dialogNames.map((item) => {
        const { name, id } = item;
        return <DialogItem key={id} name={name} id={id} />;
    });

    const elementMessage = props.stateDialog.dialogMessages.map((item) => {
        const { message, id } = item;
        return <DialogMessage key={id} message={message} />;
    });

    return (
        <div className="dialog">
            <div className="dialog-item">{elementNames}</div>
            <div className="messages">{elementMessage}</div>
        </div>
    );
};

export default Dialog;
