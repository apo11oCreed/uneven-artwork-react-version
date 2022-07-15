import React, { Component } from 'react';
import Menu from './Menu';
import Legal from './Legal';

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<footer className='tw-w-full tw-fixed tw-bottom-0 tw-z-10'>
					{/* <div className='tw-mx-auto tw-container tw-flex tw-z-10 tw-justify-evenly'>
						<span className='bg-blue tw-w-full tw-h-1'></span>
						<span className='bg-green tw-w-full tw-h-1'></span>
						<span className='bg-pink tw-w-full tw-h-1'></span>
						<span className='bg-orange tw-w-full tw-h-1'></span>
						<span className='bg-dark-orange tw-w-full tw-h-1'></span>
					</div> */}
					<div className='tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center'>
						<Legal />
						<Menu passToMenu={this.props.getLinkText} className='tw-footer' />
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
