import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/post';

const MyPosts = () => {
	const postMessages = [
		{ id: "1", message: "Keep your presence fresh on Google.", like: "5" },
		{ id: "2",  message: "Get verified and start posting today.", like: "1" },
		{ id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
	];

	const elementPostMessages = postMessages.map(item => {
		const { id, message, like } = item;
		return <Post key={id} like={like} message={message}/>
	});

    return (
		<div className={s.postWrapper}>
			My post
			<div>
				<textarea name="" id="" cols="20" rows="2"></textarea>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{elementPostMessages}
			</div>
		</div>
    )
}

export default MyPosts;