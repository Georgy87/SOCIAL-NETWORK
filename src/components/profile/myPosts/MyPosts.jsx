import React from 'react';
import './MyPosts.css';
import Post from './post/Post';
import { addPostACtionCreator, changeInputACtionCreator } from '../../../redux/state'; the 

const MyPosts = (props) => {
	const elementPostMessages = props.postsPage.postMessages.map(item => {
		const { id, message, like } = item;

		return <Post key={id} like={like} message={message}/>
	});

	const changeInput = (e) => {
		props.dispatch(changeInputACtionCreator(e.target.value))
	}

	const addPost = () => {
		props.dispatch(addPostACtionCreator())
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