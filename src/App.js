import React from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialog from './components/dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css';
const App = () => {
  return (
	<BrowserRouter>
		<div className="app-wrapper">
			<Header/>
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path='/profile' component={Profile}/>
				<Route path='/dialog' component={Dialog}/>
			</div>
		</div>
	</BrowserRouter>
  )
}

export default App;
