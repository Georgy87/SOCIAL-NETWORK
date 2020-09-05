import React from 'react';
import s from './Navigation.module.css';
// let active = s.active;
// let classes = `${s.item} ${active}`;
const Navigation = () => {
    return (
        <nav className={s.navigation}>
			<div className={s.item}>
				<a>Profile</a>
			</div>
			<div className={s.item}>
                <a>Messages</a>
			</div>
			<div className={`${s.item} ${s.active}`}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Music</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</nav>
    )
}

export default Navigation;