import React from "react";
import { Redirect } from "react-router-dom";

export const withAuthRedirect = (Component) => {
    const RedirectContainer = (props) => {
        if (!props.auth) {
            return <Redirect to="/login" />;
        }
        
        return <Component {...props} />;
    };

    return RedirectContainer;
};
