import React from "react";
import "./DialogItem.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialog/" + props.id;
    return (
        <div>
            {/* <div className="dialog-content">
                <div className="dialog-item"> */}
                <NavLink to={path} activeClassName="active">
                    <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/259608/images/3941391/flat-face-icon-23.png" alt=""/>
                    {props.name}
                </NavLink>
                {/* </div>
            </div> */}
        </div>
    );
};
export default DialogItem;