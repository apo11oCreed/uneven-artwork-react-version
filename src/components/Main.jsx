import { Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import Home from './Home';

export default function Main({ page }) {
	let pageClass = '';

	return (
		<main className={`tw-container tw-mx-auto ${(pageClass = page == '/' ? 'home' : 'not-home')}`}>
			<Switch>
				<Route path='/about' render={(props) => <About {...props} />} />
				<Route path='/portfolio' render={(props) => <Gallery {...props} />} />
				<Route exact path='/' render={(props) => <Home {...props} />} />
			</Switch>
		</main>
	);
}
