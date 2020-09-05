import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/Profile';

import './app.css';
const App = () => {
  return (
	<div className="app-wrapper">
		<Header/>
		<Navbar/>
		<Profile/>
	</div>
  )
}

export default App;
