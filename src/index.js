import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

ReactDOM.render(
	<React.StrictMode>
		<App
			postMessages={state.postsPage.postMessages}
			stateDialog={state.dialogPage}/>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
