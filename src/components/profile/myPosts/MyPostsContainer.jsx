import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../Context";
import {
    addPostACtionCreator,
    changeInputACtionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState();

                let changeInput = (text) => {
                    store.dispatch(changeInputACtionCreator(text));
                };

                const addPost = () => {
                    store.dispatch(addPostACtionCreator());
                };

                return (
                    <MyPosts
                        addPost={addPost}
                        changeInput={changeInput}
                        postsPage={state.postsPage}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;
