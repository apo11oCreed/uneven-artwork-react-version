import React, { Component } from "react";
import Artwork from "./Artwork";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: "" };
	}
	render() {
		return (
				<section className="gallery">
					<Artwork />
				</section>
		);
	}
}

export default Gallery;
