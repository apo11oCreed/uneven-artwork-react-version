import React, { Component } from "react";

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: "" };
	}
	render() {
		return (
			<>
				<div className="gallery">
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
				</div>
			</>
		);
	}
}

export default Gallery;
