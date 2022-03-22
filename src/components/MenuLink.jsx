import React, { Component } from "react";

class MenuLink extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		const text=this.props.displayText;
		if(text==='Portfolio'){
			console.log('You just clicked on Portfolio');
		} else {
			console.log('You did NOT click on Portfolio');
		}
	}

	render() {
		return (
			<>
				<li className="hover:bg-cyan-300">
					<a href='#' onClick={this.handleClick} className="tw-underline tw-whitespace-nowrap">{this.props.displayText}</a>
				</li>
			</>
		);
	}
}

export default MenuLink;
