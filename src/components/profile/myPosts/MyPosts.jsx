import React from "react";
import "./MyPosts.css";
import Post from "./post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
    const elementPostMessages = props.postsPage.postMessages.map((item) => {
        const { id, message, like } = item;
        return <Post key={id} like={like} message={message} />;
    });

    const onAddPost = (text) => {
        props.addPost(text);
    };

    return (
        <div className="post-wrapper">
            My post
            <div>
                {/* <textarea className="post-text" onChange={onChangeInput} value={props.postsPage.postMessageText} />
                <div className="post-submit">
                    <button onClick={onAddPost}>Add post</button>
                </div> */}
                <PostReduxForm  onSubmit={(text) => onAddPost(text)} />
            </div>
            <div className="posts">{elementPostMessages}</div>
        </div>
    );
};

const PostForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form className="posts-wrapper" onSubmit={handleSubmit}>
            <div >
                <Field className="post-text" name="message" component="input" type="text" />
            </div>
            <div className="post-submit">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

const PostReduxForm = reduxForm({ form: "post" })(PostForm);

export default MyPosts;
