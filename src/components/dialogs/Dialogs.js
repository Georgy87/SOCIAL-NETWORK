import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    );
};

const DialogMessage = (props) => {
    return <div className={s.message}>{props.message}</div>;
};

const Dialog = () => {
    const dialogsNames = [
        { name: "Andrey", id: "1" },
        { name: "Ivan", id: "2" },
        { name: "Gosha", id: "3" },
        { name: "Svetlana", id: "4" },
        { name: "Ruslan", id: "5" },
    ];

    const dialogMessage = [
        { message: "Hello", id: "1" },
        { message: "How are you", id: "2" },
        { message: "Good! Thanks", id: "3" },
    ];

    const elementNames = dialogsNames.map((item) => {
        const { name, id } = item;
        return <DialogItem key={id} name={name} id={id} />;
    });

    const elementMessage = dialogMessage.map((item) => {
        const { message, id } = item;
        return <DialogMessage key={id} message={message} />;
    });

    return (
        <div className={s.dialog}>
            <div className={s.dialogsItem}>{elementNames}</div>

            <div className={s.messages}>{elementMessage}</div>
        </div>
    );
};

export default Dialog;
