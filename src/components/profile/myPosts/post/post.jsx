import React from 'react';
import s from './Post.module.css'
const Post = () => {
    return (
            <div className={s.item}>
                <img src="https://w-dog.ru/wallpapers/16/18/531657912161328/3d-avatar-luk.jpg" alt=""/>
                post1
                <div>
                    <span>Like</span>
                </div>
            </div>
    )
}

export default Post;