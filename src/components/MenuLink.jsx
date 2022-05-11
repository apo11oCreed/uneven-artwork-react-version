import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MenuLink extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
				<li className={this.props.icon}>
					<Link to={() => this.props.passToMenuLink(this.props.displayText)} className="tw-underline tw-whitespace-nowrap">{this.props.displayText}</Link>
				</li>
			</Router>
		);
	}
}

export default MenuLink;
