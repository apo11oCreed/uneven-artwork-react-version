import React, { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from './Loader';

const About = React.lazy(() => import('../About/About'));
const Home = React.lazy(() => import('../Home/Home'));
const GalleryForm = React.lazy(() => import('../Portfolio/GalleryForm'));

export default function Main(props) {
	const {page}=props;

	return (
		<main tabIndex='0' role='main' className={`tw-container tw-mx-auto ${page}`}>
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
							<Home {...props} page={page} />
						</Suspense>
					)}
				/>
			</Switch>
		</main>
	);
}
