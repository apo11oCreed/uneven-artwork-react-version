import React, { Component } from "react"
import Menu from './Menu'

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<header>
          <h2 className="text-black font-serif font-bold mx-0.5">Natalie Correia</h2>
                  <Menu />
        </header>
			</>
		);
	}
}

export default Header;
