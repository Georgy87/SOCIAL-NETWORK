
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';

export let renderTree = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<App
				changeText={store._changeText.bind(store)}
				postsPage={state.postsPage}
				stateDialog={state.dialogPage}
				stateFriends={state.friendsBox}
                addPost={store._addPost.bind(store)}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
serviceWorker.unregister();
renderTree(store._state);
store._subscribe(renderTree);

