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
					<Post/>
					<Post/>
					<Post/>
				</div>
			</div>
    )
}

export default MyPosts;