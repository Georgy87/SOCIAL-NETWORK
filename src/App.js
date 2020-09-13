import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
const App = (props) => {
	console.log(props);
	const elementProfile = () => <Profile postsPage={props.postsPage} dispatch={props.dispatch} changeText={props.changeText}/>;
	const elementDialog = () => <Dialog stateDialog={props.stateDialog}/>;

  	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header/>
				<Navbar stateFriends={props.stateFriends} />
				<div className="app-wrapper-content">
					<Route path='/profile' component={elementProfile}/>
					<Route path='/dialog' component={elementDialog}/>
				</div>
			</div>
		</BrowserRouter>
  	)
}

export default App;
