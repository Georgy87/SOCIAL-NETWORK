import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
console.log(state);


// const postMessages = [
// 	{ id: "1", message: "Keep your presence fresh on Google.", like: "5" },
// 	{ id: "2",  message: "Get verified and start posting today.", like: "1" },
// 	{ id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
// ];

// const dialogNames = [
// 			{ name: "Andrey", id: "1" },
// 			{ name: "Ivan", id: "2" },
// 			{ name: "Gosha", id: "3" },
// 			{ name: "Svetlana", id: "4" },
// 			{ name: "Ruslan", id: "5" },
// ];

// const dialogMessages = [
// 			{ message: "Hello", id: "1" },
// 			{ message: "How are you", id: "2" },
// 			{ message: "Good! Thanks", id: "3" },
// ];

ReactDOM.render(
	<React.StrictMode>
		<App
			postMessages={state.postsPage.postMessages}
			stateDialog={state.dialogPage}/>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
