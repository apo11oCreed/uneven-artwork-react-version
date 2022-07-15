import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';

export default function Header({ siteName, setPage }) {
	const location = useLocation();
	const titleRef = useRef();
	const menuRef = useRef();

	let pageClass = '';

	const titleAnimate = () => {
		const title = titleRef.current;
		const titleAnimation = title.animate(
			[
				{
					letterSpacing: '2rem',
				},
			],
			1000,
			() => {}
		);

		title.classList.add('tw-will-change-auto');

		titleAnimation.play();
		titleAnimation.onfinish = () => {
			title.classList.remove('tw-will-change-auto');
			title.classList.add('titleTextSpread');
		};

		setTimeout(() => {
			mainMenuAnimate();
		}, 1000);
	};

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
			titleAnimate();
		} else {
			mainMenuAnimate();
		}
	}, [location]);

	return (
		<header className={`tw-w-full tw-container tw-mx-auto ${(pageClass = location.pathname == '/' ? 'home' : 'not-home')}`}>
			{pageClass == 'home' && (
				<div id='titleAnimate' ref={titleRef} className='tw-text-black tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-bottom-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-leading-none'>
					{siteName}
					<span className='tw-block md:tw-text-[3.6rem]'>Portfolio Site</span>
				</div>
			)}
			<Menu menuRef={menuRef} className='tw-w-full tw-container tw-mx-auto tw-main' />
		</header>
	);
}
