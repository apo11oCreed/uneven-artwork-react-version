import React, { useState, useEffect } from 'react';
import Header from './components/Common/Header';
import Main from './components/Common/Main';
import Footer from './components/Common/Footer';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
	const [page, setPage] = useState();

	return (
		<BrowserRouter>
			<div className='tw-bg-left-top tw-bg-cover'>
				<a className='tw-absolute tw-left-[-1000px] focus:tw-static' href="#mainContent" >Skip to main content</a>
				<Header setPage={setPage} siteName='Natalie Correia' />
				<Main page={page} />
				<Footer />
			</div>
		</BrowserRouter>
	);
}
