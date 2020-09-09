import React from 'react';
import './MyPosts.css';
import Post from './post/Post';

const MyPosts = ({postMessages}) => {
	const elementPostMessages = postMessages.map(item => {
		const { id, message, like } = item;
		return <Post key={id} like={like} message={message}/>
	});

    return (
		<div className="post-wrapper">
			My post
			<div>
				<textarea name="" id="" cols="20" rows="2"></textarea>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className="posts">
				{elementPostMessages}
			</div>
		</div>
    )
}

export default MyPosts;