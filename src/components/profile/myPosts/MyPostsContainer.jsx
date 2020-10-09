import React from "react";
import MyPosts from "./MyPosts";
import { addPostACtionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addPostACtionCreator(text));
        },
    };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
