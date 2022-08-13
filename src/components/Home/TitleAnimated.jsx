import React, { useRef, useEffect } from 'react';

export default function TitleAnimated({siteName}) {
	const titleRef = useRef();

	const titleAnimate = () => {
		const title = titleRef.current;
		const titleAnimation = title.animate(
			[
				{
					letterSpacing: '1rem',
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
	};

	useEffect(() => {
		titleAnimate();
	}, []);

	return (
		<div id='titleAnimate' ref={titleRef} className='tw-text-red tw-font-bold tw-mx-0.5 tw-text-center tw-absolute tw-left-1/2 tw-whitespace-nowrap -tw-translate-x-1/2 md:tw-tracking-[1vw] tw-text-[7vw] md:tw-text-[7.2rem] tw-leading-none'>
			{siteName}
			<span className='tw-block md:tw-text-[3.6rem]'>Portfolio Site</span>
		</div>
	);
}
