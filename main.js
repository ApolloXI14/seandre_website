import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navbar from './components/Navbar.js';
import styles from './less/index.less'
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(<Router><Route component={App} />
	</Router>, document.getElementById('app'));