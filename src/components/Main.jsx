import React, { Component } from "react";
import Gallery from "./Gallery";
import About from "./About";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		if ((this.props.page == "Portfolio")) {
			return (
				<Gallery />
			);
		} else {
			return (
				<About />
			);
		}
	}
}

export default Main;
