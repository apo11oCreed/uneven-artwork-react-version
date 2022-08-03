import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GalleryForm from './GalleryForm';
import About from './About';
import Home from './Home';

export default function Main({ page }) {
	let pageClass = '';

	return (
		<main id='mainContent' tabIndex='0' role='main' className={`tw-pt-[6.8rem] tw-container tw-mx-auto ${(pageClass = page == '/' ? 'home' : 'not-home')}`}>
			<Switch>
					<Route path='/about' render={(props) => <About {...props} />} />
					<Route path='/portfolio' render={(props) => <GalleryForm {...props} />} />
					<Route exact path='/' render={(props) => <Home {...props} />} />
			</Switch>
		</main>
	);
}
