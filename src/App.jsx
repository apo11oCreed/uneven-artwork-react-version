import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

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
    console.log(name);
	}

	render() {
		return (
			<div className="tw-bg-left-top tw-bg-cover">
				<Header getLinkText={this.updatePageState} />
				<Main page={this.state.page} />
				<Footer getLinkText={this.updatePageState} />
			</div>
		);
	}
}

export default App;
