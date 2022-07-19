import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

export default function App() {
	const [page, setPage] = useState();

	return (
		<HashRouter>
			<div className='tw-bg-left-top tw-bg-cover'>
				<Header setPage={setPage} siteName='Natalie Correia' />
				<Main page={page} />
				<Footer />
			</div>
		</HashRouter>
	);
}
