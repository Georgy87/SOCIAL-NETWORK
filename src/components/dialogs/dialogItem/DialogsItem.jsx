import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    console.log(s)
    let path = "/dialog/" + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </div>
    );
};
export default DialogItem;