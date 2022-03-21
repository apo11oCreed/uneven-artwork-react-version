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
						<MenuLink />
						<MenuLink />
					</ul>
				</nav>
			</>
		);
	}
}

export default Menu;
