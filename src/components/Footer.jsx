import React, { Component } from "react";
import Menu from "./Menu";
import Legal from "./Legal";

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<footer className="tw-w-full tw-fixed tw-bottom-0 tw-py-2">
					<div className="tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center">
						<Legal />
						<Menu passToMenu={this.props.getLinkText} className="tw-footer" />
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
