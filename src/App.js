import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
const App = (props) => {
	const elementProfile = () => <Profile postsPage={props.postsPage} dispatch={props.dispatch} changeText={props.changeText}/>;
	const elementDialog = () => <Dialog stateDialog={props.stateDialog} dispatch={props.dispatch} />;

  	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Navbar stateFriends={props.stateFriends} />
				<div className="app-wrapper-content">
					<Route path='/profile' render={elementProfile}/>
					<Route path='/dialog' render={elementDialog}/>
				</div>
			</div>
		</BrowserRouter>
  	)
}

export default App;
