import React, { useState, useEffect } from 'react';
import Header from './components/Common/Header';
import Main from './components/Common/Main';
import Footer from './components/Common/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

export default function App() {

	// Page state should be converted to feature and added to Store to allow for all components to render elements based on the current page

	const [page, setPage] = useState();

	return (
		<Provider store={store}>
		<BrowserRouter>
			<div className='tw-bg-left-top tw-bg-cover'>
				<a className='tw-absolute tw-left-[-1000px] focus:tw-static' href="#mainContent" >Skip to main content</a>
				<Header setPage={setPage} siteName='Natalie Correia' />
				<Main page={page} />
				<Footer />
			</div>
		</BrowserRouter>
		</Provider>
	);
}
