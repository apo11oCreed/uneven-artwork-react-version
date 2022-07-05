import React, { useEffect } from "react";
import Gallery from "./Gallery";
import About from "./About";
import Home from "./Home";
import { Route, Switch, useLocation } from "react-router-dom";

export default function Main(props) {

	const location = useLocation();
	const { setPage } = props;

	let pageClass = '';

	useEffect(() => {

		setPage(location.pathname);

		if (location.pathname == '/') {
			titleAnimate();
		}
		else {
			mainMenuAnimate();
		}

	}, [location]);

	return (
		<main className={`tw-container tw-mx-auto ${pageClass=location.pathname=='/'?'home':'not-home'}`}>
			<Switch>
				<Route path="/about" component={About} />
				<Route path="/portfolio" render={props => <Gallery {...props} />} />
				<Route exact path="/" component={Home} />
			</Switch>
		</main>
	);
}

function titleAnimate() {

	const title = document.querySelector("#titleAnimate");
	const titleAnimation = title.animate(
		[{
			letterSpacing: "20px",
		}, ],
		1000,
		() => {}
	);

	title.classList.add("tw-will-change-auto");

	titleAnimation.play();
	titleAnimation.onfinish = () => {
		title.classList.remove("tw-will-change-auto");
		title.classList.add("titleTextSpread");
	};

	setTimeout(() => {
		mainMenuAnimate();
	}, 1000);
}

function mainMenuAnimate() {

	const navTitle = document.querySelector("nav#futureH1");
	const navTitleAnimate = navTitle.animate(
		[{
			top: "0",
		}, ],
		500,
		() => {}
	);

	navTitleAnimate.play();
	navTitleAnimate.onfinish = () => {
		navTitle.classList.add("moveNavDown");
	};
}
