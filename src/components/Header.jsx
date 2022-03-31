import React, { Component } from "react";
import Menu from "./Menu";

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<header className="tw-container tw-mx-auto">
					<h1 className="tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 tw-tracking-[1vw] tw-text-[7vw] md:tw-text-7xl tw-animate-h1Spread">{this.props.siteName}</h1>
					<Menu passToMenu={this.props.getLinkText} className="tw-main tw-w-fit tw-fixed tw-right-[2rem] tw-top-[2rem]" />
				</header>
			</>
		);
	}
}

export default Header;
