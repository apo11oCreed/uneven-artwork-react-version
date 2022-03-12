import React, { Component } from "react";
import Menu from "./Menu";
import Legal from "./Legal";

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<footer>
					<Menu />
					<Legal />
				</footer>
			</>
		);
	}
}

export default Footer;
