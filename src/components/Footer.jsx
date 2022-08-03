import React, { Component } from 'react';
import Legal from './Legal';

class Footer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<footer className='tw-w-full tw-fixed tw-bottom-0 tw-z-10 tw-pt-[1.5rem] tw-pb-[1rem]'>
					<div className='tw-container tw-mx-auto tw-flex tw-justify-center tw-items-center'>
						<Legal />
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
