import React, { Component } from "react";
import Artwork from "./Artwork";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: "" };
	}
	render() {
		return (
			<>
				<div className="gallery">
					<Artwork />
				</div>
			</>
		);
	}
}

export default Gallery;
