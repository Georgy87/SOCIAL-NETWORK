import React from 'react';
import s from './Profile.module.css'
const Profile = () => {
    return (
        <div className={s.content}>
			<div>
				<img src="https://miro.medium.com/max/1000/1*yrgbW7GvOcp94f-5HZcmyQ.jpeg" alt=""/>
			</div>
			<div>
				ava + descr
			</div>
			<div>
				my post
				<div>
					new post
				</div>
				<div className={s.posts}>
					<div className={s.item}>
						post1
					</div>
					<div className={s.item}>
						post2
					</div>
				</div>
			</div>
		</div>
    )
}

export default Profile;