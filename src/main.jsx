import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';
import App from './app/App';
import './styles/tailwindcss.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './app/store/store';
import { Provider } from 'react-redux';

// axe-core issue to resolve: findDOMNode is deprecated. Instead, add a ref directly to the element you want to reference
if (process.env.NODE_ENV !== 'production') {
	axe(React, ReactDOM, 1000);
}

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
