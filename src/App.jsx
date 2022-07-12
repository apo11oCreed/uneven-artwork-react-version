import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';

export default function App() {
	// UX details
	// On homepage entry, title should fade in and expand
	// On homepage exit, title should fade out and collapse

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
