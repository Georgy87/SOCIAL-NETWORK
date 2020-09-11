import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './redux/state';
import { changeText } from './redux/state';

export let renderTree = (props) => {

	ReactDOM.render(
		<React.StrictMode>
			<App
				changeText={changeText}
				postMessages={props.postsPage.postMessages}
				stateDialog={props.dialogPage}
				stateFriends={props.friendsBox}
                addPost={addPost}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

serviceWorker.unregister();