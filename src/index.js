import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/state";

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                postsPage={state.postsPage}
                stateDialog={state.dialogPage}
                stateFriends={state.friendsBox}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById("root")
    );
};
renderTree(store.getState());
store.subscribe(renderTree);
serviceWorker.unregister();
