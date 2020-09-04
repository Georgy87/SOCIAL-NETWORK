import React from 'react';
import Header from './components/header';
import Navigation from './components/navigation';
import Profile from './components/profile';

import './app.css';
const App = () => {
  return (
	<div className="app-wrapper">
		<Header/>
		<Navigation/>
		<Profile/>
	</div>
  )
}

export default App;
