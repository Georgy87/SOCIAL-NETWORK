import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";
import photo from "../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            <div className="dialog-content">
                <NavLink to={path} activeClassName="active">
                    <img src={photo} alt=""/>
                    <div className="dialog-name">{props.name}</div>
                </NavLink>
                <div className="bubble">
                    <div className="bubble-in">
                        <div className="messages-item">
                            {props.message}
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};
export default DialogItem;