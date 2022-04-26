import React, { Component } from "react";

class MenuLink extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<>
				<li className={this.props.icon}>
					<a href='#' onClick={() => this.props.passToMenuLink(this.props.displayText)} className="tw-underline tw-whitespace-nowrap">{this.props.displayText}</a>
				</li>
			</>
		);
	}
}

export default MenuLink;
