import React, { useState, useEffect } from 'react';
import Main from './components/common/Main';
import Footer from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
	// Page state should be converted to feature and added to Store to allow for all components to render elements based on the current page

	const [page, setPage] = useState();

	return (
			<BrowserRouter>
				<div className='tw-bg-left-top tw-bg-cover'>
					<a className='tw-absolute tw-left-[-1000px] focus:tw-static' href='#mainContent'>
						Skip to main content
					</a>
					<Main page={page} />
					<Footer />
				</div>
			</BrowserRouter>
	);
}
