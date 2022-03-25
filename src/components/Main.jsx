import React, { Component } from "react";
import Gallery from "./Gallery";
import Legal from "./Legal";
import Artwork from "./Artwork";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		if ((this.props.page == "Portfolio")) {
			return (
				<Gallery />
			);
		} else if (this.props.page == "About Natalie") {
			return (
				<Legal />
			);
		} else {
			return (
				<Artwork />
			);
		}
	}
}

export default Main;
