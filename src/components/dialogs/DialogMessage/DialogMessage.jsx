import React from 'react';
import './DialogMessage.css';

const DialogMessage = (props) => {
    return (
        <div class="bubble">
            <div class="bubble-in">
                <div className="messages-item">{props.message}</div>
            </div>
        </div>

    )
};

export default DialogMessage;