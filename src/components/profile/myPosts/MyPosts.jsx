import React from 'react';
import './MyPosts.css';
import Post from './post/Post';

const MyPosts = (props) => {

	const elementPostMessages = props.postMessages.map(item => {
		const { id, message, like } = item;

		return <Post key={id} like={like} message={message}/>
	});

	const changeInput = (e) => {
		props.changeText(e.target.value);
	}

    return (
		<div className="post-wrapper">
			My post
			<div>
				<textarea name="" id="" cols="20" rows="2" onChange={changeInput}></textarea>
				<div>
					<button onClick={props.addPost}>Add post</button>
				</div>
			</div>
			<div className="posts">
				{elementPostMessages}
			</div>
		</div>
    )
}

export default MyPosts;