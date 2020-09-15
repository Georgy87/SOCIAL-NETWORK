import React from "react";
import "./Dialog.css";
import DialogItem from './DialogItem/DialogsItem';
import {Button, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {dialogMessageActionCreator, dialogTextActionCreator} from '../../redux/dialog-reducer';

const Dialog = (props) => {
    const elementNames =  props.stateDialog.dialogNames.map((item) => {
        const { name, id, message } = item;
        return <DialogItem key={id} name={name} id={id} message={message}/>;
    });

    const addMessage = () => {
        props.dispatch(dialogMessageActionCreator());
    }

    const addChange = (e) => {
        props.dispatch(dialogTextActionCreator(e.target.value));
    }

    return (
        <div>
        <div className="dialog">
            <div className="dialog-item ">
                {elementNames}
            </div>
        </div>
            <InputGroup onChange={addChange}>
                <InputGroup.Prepend >
                    <InputGroup.Text onClick={addMessage} id="basic-addon1">Message</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    );
};

export default Dialog;
