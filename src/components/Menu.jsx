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
						<MenuLink displayText="Home" icon="home-link" passToMenuLink={this.props.passToMenu} />
						<MenuLink displayText="Portfolio" passToMenuLink={this.props.passToMenu} />
						<MenuLink displayText="About Natalie" passToMenuLink={this.props.passToMenu} />
					</ul>
				</nav>
			</>
		);
	}
}

export default Menu;
