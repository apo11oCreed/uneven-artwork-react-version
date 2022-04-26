import React, { Component } from "react";
import Gallery from "./Gallery";
import About from "./About";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let page;

		switch(this.props.page){
			case 'Portfolio':
				page = <Gallery />;
			break;
			case 'About Natalie':
				page = <About />;
			break;
			default:
				page = '';
			break;
		}
		
		return (
			<main className="tw-container tw-mx-auto">
				{page}
			</main>
		);
	}
}

export default Main;
