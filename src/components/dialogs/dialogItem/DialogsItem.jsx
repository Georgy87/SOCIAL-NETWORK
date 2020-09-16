import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            <div className="dialog-content">
                <NavLink to={path} activeClassName="active">
                    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/259608/images/3941391/flat-face-icon-23.png" alt=""/>
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