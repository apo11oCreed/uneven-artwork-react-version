import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import ImgUrl from "./img/10475996-3x2-940x627.jpg";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
	// pictures(array){
	// 	return array;
	// }

	// const pics=['imgUrl1','imgUrl2','imgUrl3','imgUrl4'];

	const [home, setHome] = useState(true);

	useEffect(() => {
		if (!home) {
			animateHp();
		}
	}, [home]);

	return (
		<Router>
			<div className="tw-bg-left-top tw-bg-cover">
				<Header siteName="Natalie Correia" />
				{/* <Main page={this.state.page}>{ React.cloneElement('Artwork',{pictures: pics})}</Main> */}
				<Main isHome={setHome} />
				<Footer />
			</div>
		</Router>
	);
}

function animateHp() {

	const title = document.querySelector("h1");

	//Check if H1 has already animated to the top of the page
	if (title.classList.contains("moveH1ToTop")) {
	} else {
		const titleAnimation = title.animate(
			[
				{
					bottom: "calc(100% - 6rem)",
				},
			],
			500,
			() => {}
		);

		title.classList.add("tw-will-change-auto");
		titleAnimation.play();

		titleAnimation.addEventListener("finish", () => {
			title.classList.remove("tw-bottom-1/2");
			title.classList.remove("tw-will-change-auto");
			title.classList.add("moveH1ToTop");
		});
	}
}
