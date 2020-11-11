import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Navbar from './components/Navbar.js';
import styles from './less/index.less';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Navbar />, document.getElementById('navbar'));