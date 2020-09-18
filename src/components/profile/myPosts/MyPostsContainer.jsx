import React from "react";
import MyPosts from "./MyPosts";
import {
    addPostACtionCreator,
    changeInputACtionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostACtionCreator());
        },

        changeInput: (text) => {
            dispatch(changeInputACtionCreator(text));
        },
    };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
