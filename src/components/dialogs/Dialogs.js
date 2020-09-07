import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';
const Dialog = () => {
    return (
            <div className={s.dialog}>
                <div className={s.dialogs}>
                    <div className={s.dialogsItem}>
                        <NavLink to="/dialog/1" activeClassName={s.active}>Andrey</NavLink>
                    </div>
                    <div className={s.dialogsItem} >
                        <NavLink to="/dialog/2" activeClassName={s.active}>Ruslan</NavLink>
                    </div>
                    <div className={s.dialogsItem}>
                        <NavLink to="/dialog/3" activeClassName={s.active}>Ivan</NavLink>
                    </div>
                    <div className={s.dialogsItem}>
                        <NavLink to="/dialog/4" activeClassName={s.active}>Gosha</NavLink>
                    </div>
                    <div className={s.dialogsItem}>
                        <NavLink to="/dialog/5" activeClassName={s.active}>Svetlana</NavLink>
                    </div>
                </div>

                <div className={s.messages}>
                    <div className={s.message}>Hello</div>
                    <div className={s.message}>How are you?</div>
                    <div className={s.message}>Good Thanks</div>
                </div>
            </div>
    )
}

export default Dialog;