import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
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

store.subscribe(() => {
    const state = store.getState();
    renderTree(state);
});
serviceWorker.unregister();
