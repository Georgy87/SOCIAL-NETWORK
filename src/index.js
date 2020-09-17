import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import StoreContext from "./Context";

export let renderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App
                    store={store}
                    stateFriends={state.friendsBox}
                />
            </StoreContext.Provider>
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
