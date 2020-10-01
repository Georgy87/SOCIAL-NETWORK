import React from "react";
import "./Dialog.css";
import DialogItem from './DialogItem/DialogsItem';
import {FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from "react-router-dom";

const Dialog = (props) => {

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

    const handleKeyPress = (e) => {
        if(e.key == 'Enter'){
            // props.addChange(e.target.value);
            props.addMessage();
        }
    }
    if (!props.auth) {
        return <Redirect to="/login" />
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
                    <InputGroup.Text   variant="dark" onClick={onAddMessage} id="basic-addon1">Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    // value={props.state.dialogPageMessageText}
                    onKeyPress={handleKeyPress}
                    placeholder="message"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    );
};

export default Dialog;
