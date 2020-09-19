import React from "react";
import "./Dialog.css";
import DialogItem from './DialogItem/DialogsItem';
import {FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dialog = (props) => {
    console.log(props.state.dialogPageMessageText);
    const elementNames =  props.state.dialogNames.map((item) => {
        const { name, id, message } = item;
        return <DialogItem key={id} name={name} id={id} message={message}/>;
    });

    const onAddMessage = () => {
        props.addMessage();
    }

    const onAddChange = (e) => {
        props.addChange(e.target.value);
    }

    return (
        <div>
        <div className="dialog">
            <div className="dialog-item">
                {elementNames}
            </div>
        </div>
            <InputGroup onChange={onAddChange} >
                <InputGroup.Prepend >
                    <InputGroup.Text onClick={onAddMessage} id="basic-addon1">Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    value={props.state.dialogPageMessageText}
                    placeholder="message"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    );
};

export default Dialog;
