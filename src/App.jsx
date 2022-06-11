import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import ImgUrl from "./img/10475996-3x2-940x627.jpg";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

export default function App() {
	// pictures(array){
	// 	return array;
	// }

	// const pics=['imgUrl1','imgUrl2','imgUrl3','imgUrl4'];
	// const contentful=require('contentful');
	const contentful=import.meta.env;
	const spaceId=contentful.VITE_CONTENTFUL_SPACE_ID;
	const accessToken=contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
	

	const [home, setHome] = useState('/');

	useEffect(() => {

		if(sessionStorage.getItem("animeRan")=='yes'){
			console.log('animeRan exists');
			initAnimate();
		} else {
			console.log('animeRan does not exist');
			animateHp();
		}
	}, [home]);

	return (
		<HashRouter>
			<div className="tw-bg-left-top tw-bg-cover">
				<Header siteName="Natalie Correia" />
				{/* <Main page={this.state.page}>{ React.cloneElement('Artwork',{pictures: pics})}</Main> */}
				<Main isHome={setHome} />
				<Footer />
			</div>
		</HashRouter>
	);
}

function initAnimate(){

	const body=document.querySelector('body');
	const navTitle = document.querySelector("nav#futureH1");
	
	navTitle.classList.remove("-tw-top-10");
	navTitle.classList.remove("tw-will-change-auto");
	navTitle.classList.add("moveNavDown");
}

function animateHp() {

	const currentH1 = document.querySelector("h1");
	const navTitle = document.querySelector("nav#futureH1");
	//currentH1.classList.add("tw-animate-h1Spread");

		const titleAnimation = currentH1.animate(
			[
				{
					bottom: "calc(100% - 14rem)",
					opacity: "0"
				},
			],
			1000,
			() => {}
		);

		const futureTitleAnimation = navTitle.animate(
			[
				{
					top:"0"
				},
			],
			500,
			() => {}
		);

		currentH1.classList.add("tw-will-change-auto");
		navTitle.classList.add("tw-will-change-auto");

		titleAnimation.play();
		futureTitleAnimation.play();

		titleAnimation.addEventListener("finish", () => {
			currentH1.classList.remove("tw-bottom-1/2");
			currentH1.classList.remove("tw-will-change-auto");
			currentH1.classList.add("moveH1ToTop");

		});

		futureTitleAnimation.addEventListener("finish", () => {
			navTitle.classList.remove("-tw-top-10");
			navTitle.classList.remove("tw-will-change-auto");
			navTitle.classList.add("moveNavDown");
		});

		sessionStorage.setItem("animeRan", 'yes');

	}
