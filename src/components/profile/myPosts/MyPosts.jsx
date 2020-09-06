import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
    return (
			<div>
				My post
				<div>
					<textarea name="" id="" cols="20" rows="5"></textarea>
                    <button>Add post</button>
				</div>
				<div className={s.posts}>
					<Post message="Gosha" like="5"/>
					<Post message="Ivan" like="1"/>
					<Post message="Anton" like="2"/>
				</div>
			</div>
    )
}

export default MyPosts;