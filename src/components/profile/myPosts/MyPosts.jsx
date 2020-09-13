import React from 'react';
import './MyPosts.css';
import Post from './post/Post';

const MyPosts = (props) => {

	const elementPostMessages = props.postsPage.postMessages.map(item => {
		const { id, message, like } = item;

		return <Post key={id} like={like} message={message}/>
	});

	const changeInput = (e) => {
		props.dispatch({type: 'ADD-TEXT', newText: e.target.value})
	}

	const addPost = () => {
		props.dispatch({type: 'ADD-POST'})
	}

    return (
		<div className="post-wrapper">
			My post
			<div>
				<textarea onChange={changeInput} placeholder={props.postsPage.text}/>
				<div>
					<button onClick={addPost}>Add post</button>
				</div>
			</div>
			<div className="posts">
				{elementPostMessages}
			</div>
		</div>
    )
}

export default MyPosts;