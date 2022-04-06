import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import imgUrl from './img/10475996-3x2-940x627.jpg'

class App extends React.Component {
	constructor() {
    super();
		this.state = {
			page: "Home",
		};
    this.updatePageState=this.updatePageState.bind(this);
	}

	updatePageState(name) {
		this.setState({page:name});
		let title=document.querySelector('h1');
		title.classList.remove('tw-bottom-1/2');
		title.classList.add('moveH1ToTop');
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
