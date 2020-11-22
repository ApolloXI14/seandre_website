import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navbar from './components/Navbar.js';
// import poems from './components/poems.js'
import styles from './less/index.less';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter><App />
	</BrowserRouter>, document.getElementById('app'));