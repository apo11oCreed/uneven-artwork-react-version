import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import ImgUrl from './img/10475996-3x2-940x627.jpg';

class App extends React.Component {
	constructor() {
    super();
		this.state = {
			page: "Home",
		};
    this.updatePageState=this.updatePageState.bind(this);
	}

	updatePageState(name) {

		const title=document.querySelector('h1');

		// Check if H1 has already animated to the top of the page
		if(title.classList.contains('moveH1ToTop')){

			this.setState({page:name});

		} else {

			const titleAnimation=title.animate([
				{
					bottom:'calc(100% - 6rem)',
				},
				],500,()=>{}
			);
	
			title.classList.add('tw-will-change-auto');
			titleAnimation.play();
	
			titleAnimation.addEventListener('finish',()=>{

				title.classList.remove('tw-bottom-1/2');
				title.classList.remove('tw-will-change-auto');
				title.classList.add('moveH1ToTop');
				this.setState({page:name});

			});

		}
		
	}

	render() {
		return (
			<div className="tw-bg-left-top tw-bg-cover">
				<Header siteName="Natalie Correia" getLinkText={this.updatePageState} />
				<Main page={this.state.page} />
				<Footer getLinkText={this.updatePageState} />
			</div>
		);
	}
}

export default App;
