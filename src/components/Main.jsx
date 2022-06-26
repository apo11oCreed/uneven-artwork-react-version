import React, { useEffect } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Home from "./Home";
import { Route, Switch, useLocation } from "react-router-dom";

export default function Main(props) {

	const location = useLocation();
	let page='';

	useEffect(() => {

		props.isHome(location.pathname);

	},[location]);

	page=location.pathname=='/'?'home':'not-home';

	return (
		<main className={`tw-container tw-mx-auto ${page}`}>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/portfolio" component={Gallery} />
				<Route exact path="/" component={Home} />
			</Switch>
		</main>
	);
}
