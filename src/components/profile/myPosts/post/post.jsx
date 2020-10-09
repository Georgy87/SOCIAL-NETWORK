import React from "react";
import "./Post.css";
import photo from "../../../../assets/img/preloader/3ac3da68aeffb6bc94fe1f9f2cf3b7b5.jpg";

const Post = (props) => {
    const { message, like } = props;
    return (
        <div className="post-item">
            <img src={photo} alt="" />
            <div className="post-like-descr">
                <span>Like {like}</span>
                {message}
            </div>
            <hr style={{color: "white"}}/>
        </div>
    );
};

export default Post;
