import React from 'react';
import './Post.css'
const Post = (props) => {
    // console.log(props);
    return (
            <div className="post-item">
                <img src="https://w-dog.ru/wallpapers/16/18/531657912161328/3d-avatar-luk.jpg" alt=""/>
                    {props.message}
                <div>
                    <span>Like {props.like}</span>
                </div>
            </div>
    )
}

export default Post;