import React from "react";
import "./MyPosts.css";
import Post from "./post/Post";

const MyPosts = (props) => {
    console.log(props.postsPage.postMessageText);
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
            <div>
                <textarea onChange={onChangeInput} value={props.postsPage.postMessageText} />
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className="posts">{elementPostMessages}</div>
        </div>
    );
};

export default MyPosts;
