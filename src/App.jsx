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

	// UX details
	// On homepage entry, title should fade in and expand
	// On homepage exit, title should fade out and collapse

	const contentful=import.meta.env;
	const spaceId=contentful.VITE_CONTENTFUL_SPACE_ID;
	const accessToken=contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
	const query = `
	{
		imageCollection{
		 items{
		   image{
			 fileName
			 url
		   }
		 }
	   }
	 }
	`;

	const [home, setHome] = useState('/');
	const [data, setData] = useState({});

	useEffect(()=>{

		async function dataTwo(){
			const dataOne = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`,{
			method:'POST',
			headers:{
				"content-type": "application/json",
				Authorization: `Bearer ${accessToken}`
			},
			body: JSON.stringify({
				query
			})
		})
		.then(res => res.json())
		.then(response=>{
			const { data } = response;
			setData(data);
		});
		}
		dataTwo();
	},[data])

	if(home=='/'){
		useEffect(()=>{

			titleAnimate();

		},[home]);

	} else {

		useEffect(()=>{

			mainMenuAnimate();
			
		},[home]);

	}

	return (
		<HashRouter>
			<div className="tw-bg-left-top tw-bg-cover">
				<Header page={home} siteName="Natalie Correia" />
				{/* <Main page={this.state.page}>{ React.cloneElement('Artwork',{pictures: pics})}</Main> */}
				<Main isHome={setHome} page={home} data={data} />
				<Footer />
			</div>
		</HashRouter>
	);
}

function mainMenuAnimate(){

	const navTitle = document.querySelector("nav#futureH1");
	const navTitleAnimate = navTitle.animate(
			[
				{
					top: "0"
				},
			],
			500,
			() => {}
		);

	navTitleAnimate.play();
	navTitleAnimate.onfinish=()=>{
		navTitle.classList.add("moveNavDown");
	}
}

function fadeBackground(){
	const bg=document.querySelector('body');
	bg.setAttribute('class','test1');
}

function titleAnimate() {

	const title = document.querySelector("#titleAnimate");

		const titleAnimation = title.animate(
			[
				{
					letterSpacing: '20px'
				},
			],
			1000,
			() => {}
		);

		title.classList.add("tw-will-change-auto");

		titleAnimation.play();
		titleAnimation.onfinish=()=>{
			title.classList.remove("tw-will-change-auto");
			title.classList.add("titleTextSpread");
		}

		//sessionStorage.setItem("animeRan", 'yes');
		setTimeout(()=>{
			mainMenuAnimate();
		},1000);

	}
