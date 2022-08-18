import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';

export default function Header({ setPage }) {
	const location = useLocation();
	const menuRef = useRef();

	let pageClass = '';

	const mainMenuAnimate = () => {
		const menu = menuRef.current;
		const navTitleAnimate = menu.animate(
			[
				{
					top: '0',
				},
			],
			500,
			() => {}
		);

		navTitleAnimate.play();
		navTitleAnimate.onfinish = () => {
			menu.classList.add('moveNavDown');
		};
	};

	useEffect(() => {

		pageClass = location.pathname == '/' ? 'home' : location.pathname.substring(1);

		setPage(pageClass);

		document.title=`Uneven Artwork | ${pageClass.charAt(0).toUpperCase() + pageClass.slice(1)}`;
		// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

		if (location.pathname == '/') {
			setTimeout(() => {
				mainMenuAnimate();
			}, 1000);
		} else {
			mainMenuAnimate();
		}
	}, [location]);

	return (
		<header className={`tw-w-full tw-container tw-mx-auto sm:tw-block ${pageClass = location.pathname == '/' ? 'home' : location.pathname.substring(1)}`}>
			<Menu menuRef={menuRef} className='tw-w-full tw-container tw-mx-auto tw-main' />
		</header>
	);
}
