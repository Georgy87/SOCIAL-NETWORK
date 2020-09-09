import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName="active">
                {props.name}
            </NavLink>
        </div>
    );
};
export default DialogItem;