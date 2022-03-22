import React, { Component } from "react"
import MenuLink from './MenuLink'

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<nav className={this.props.className}>
					<ul className="tw-px-4 tw-py-2">
						<MenuLink displayText="Portfolio" />
						<MenuLink displayText="About Natalie" />
					</ul>
				</nav>
			</>
		);
	}
}

export default Menu;
