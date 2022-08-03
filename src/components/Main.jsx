import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './Loader';

const About = React.lazy(() => import('./About'));
const Home = React.lazy(() => import('./Home'));
const GalleryForm = React.lazy(() => import('./GalleryForm'));

export default function Main({ page }) {
	let pageClass = '';

	return (
		<main id='mainContent' tabIndex='0' role='main' className={`tw-pt-[6.8rem] tw-container tw-mx-auto ${(pageClass = page == '/' ? 'home' : 'not-home')}`}>
			<Switch>
				<Route
					path='/about'
					render={(props) => (
						<Suspense fallback={<Loader />}>
							<About {...props} />
						</Suspense>
					)}
				/>

				<Route
					path='/portfolio'
					render={(props) => (
						<Suspense fallback={<Loader />}>
							<GalleryForm {...props} />
						</Suspense>
					)}
				/>

				<Route
					exact
					path='/'
					render={(props) => (
						<Suspense fallback={<Loader />}>
							<Home {...props} />
						</Suspense>
					)}
				/>
			</Switch>
		</main>
	);
}
