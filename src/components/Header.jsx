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
          <h2 className="App-header text-pink font-serif font-bold border-4 rounded-full hover:bg-blue-700 m-10">Natalie Correia</h2>
                  <Menu />
        </header>
			</>
		);
	}
}

export default Header;
