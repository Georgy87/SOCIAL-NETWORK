import React from "react";
import "./MyPosts.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    const elementPostMessages = props.postsPage.postMessages.map((item) => {
        const { id, message, like } = item;
        return <Post key={id} like={like} message={message} />;
    });

    const onAddPost = () => {
        props.addPost();
    };

    const onChangeInput = (e) => {
        props.changeInput(e.target.value);
    };

    return (
        <div className="post-wrapper">
            My post
            <div className="posts-wrapper">
                <textarea className="post-text" onChange={onChangeInput} value={props.postsPage.postMessageText} />
                <div className="post-submit">
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className="posts">{elementPostMessages}</div>
        </div>
    );
};

export default MyPosts;
