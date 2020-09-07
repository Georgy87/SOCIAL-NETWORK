import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    console.log(path);
    return (
        <div>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const DialogMessage = (props) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

const Dialog = () => {
    return (
            <div className={s.dialog}>
                <div className={s.dialogsItem}>
                    <DialogItem name="Andrey" id="1"/>
                    <DialogItem name="Ivan" id="2"/>
                    <DialogItem name="Gosha" id="3"/>
                    <DialogItem name="Svetlana" id="4"/>
                    <DialogItem name="Ruslan" id="5"/>
                </div>

                <div className={s.messages}>
                    <DialogMessage text="hello"/>
                    <DialogMessage text="How are you?"/>
                    <DialogMessage text="Good Thanks"/>
                </div>
            </div>
    )
}

export default Dialog;