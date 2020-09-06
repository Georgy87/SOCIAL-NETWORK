import React from 'react';
import s from './Profile.module.css';
import MyPosts from './myPosts/MyPosts';

const Profile = () => {
    return (
		<div>
			<div>
				<img className={s.poster} src="https://miro.medium.com/max/1000/1*yrgbW7GvOcp94f-5HZcmyQ.jpeg" alt=""/>
			</div>
			<div>
				ava + descr
			</div>
			<MyPosts/>
		</div>
    )
}

export default Profile;