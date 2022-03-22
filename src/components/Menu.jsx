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
					<ul>
						<MenuLink displayText="Portfolio" />
						<MenuLink displayText="About Natalie" />
					</ul>
				</nav>
			</>
		);
	}
}

export default Menu;
