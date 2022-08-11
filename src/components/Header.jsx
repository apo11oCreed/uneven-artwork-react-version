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
		setPage(location.pathname);

		if (location.pathname == '/') {
			document.title='Uneven Artwork | Home';
			setTimeout(() => {
				mainMenuAnimate();
			}, 1000);
		} else {
			document.title='Uneven Artwork | ' + location.pathname.substring(1);
			mainMenuAnimate();
		}
	}, [location]);

	return (
		<header className={`tw-w-full tw-container tw-mx-auto sm:tw-block ${(pageClass = location.pathname == '/' ? 'home' : 'not-home')}`}>
			<Menu menuRef={menuRef} className='tw-w-full tw-container tw-mx-auto tw-main' />
		</header>
	);
}
