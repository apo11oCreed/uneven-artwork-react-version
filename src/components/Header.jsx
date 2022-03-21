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
          <h1 className="tw-text-black tw-font-bold tw-mx-0.5 tw-text-7xl tw-text-center">Natalie Correia</h1>
                  <Menu className="tw-main" />
        </header>
			</>
		);
	}
}

export default Header;
