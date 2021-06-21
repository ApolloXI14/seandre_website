import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navbar from './components/Navbar.js';
import styles from './less/index.less'
import { BrowserRouter as Router } from 'react-router-dom';
import regeneratorRuntime from "regenerator-runtime";

ReactDOM.hydrate(<Router><App />
	</Router>, document.getElementById('app'));