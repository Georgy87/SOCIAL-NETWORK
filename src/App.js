import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
const App = () => {
	const postMessages = [
		{ id: "1", message: "Keep your presence fresh on Google.", like: "5" },
		{ id: "2",  message: "Get verified and start posting today.", like: "1" },
		{ id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
	];

	const dialogNames = [
        { name: "Andrey", id: "1" },
        { name: "Ivan", id: "2" },
        { name: "Gosha", id: "3" },
        { name: "Svetlana", id: "4" },
        { name: "Ruslan", id: "5" },
	];

	const dialogMessages = [
        { message: "Hello", id: "1" },
        { message: "How are you", id: "2" },
        { message: "Good! Thanks", id: "3" },
	];

	const elementProfile = () => <Profile postMessages={postMessages}/>;
	const elementDialog = () => <Dialog dialogNames={dialogNames} dialogMessages={dialogMessages}/>;

  return (
	<BrowserRouter>
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path='/profile' component={elementProfile}/>
				<Route path='/dialog' component={elementDialog}/>
			</div>
		</div>
	</BrowserRouter>
  )
}

export default App;
