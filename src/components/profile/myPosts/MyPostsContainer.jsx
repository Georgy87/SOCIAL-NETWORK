import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostACtionCreator,
    changeInputACtionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    const state = props.store.getState();
    const store = props.store;

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
};

export default MyPostsContainer;
