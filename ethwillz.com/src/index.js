import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Navbar from './Navbar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();

// npm install --save-dev react-scripts-webpack-config-editor
