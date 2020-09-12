
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './redux/state';
import { changeText } from './redux/state';
import state, { subscribe } from './redux/state';

export let renderTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				changeText={changeText}
				postsPage={state.postsPage}
				stateDialog={state.dialogPage}
				stateFriends={state.friendsBox}
                addPost={addPost}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
serviceWorker.unregister();
renderTree(state);
subscribe(renderTree);

