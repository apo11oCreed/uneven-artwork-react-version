import React, { useEffect } from 'react';

export default function Modal({ image, showModal }) {
	useEffect(() => {
		document.addEventListener('keyup', handleEscapeKey);
		return () => document.removeEventListener('keyup', handleEscapeKey);
	}, []);

	const handleEscapeKey = (e) => {
		if (e.keyCode == 13 || e.keyCode == 27) {
			showModal(false);
		}
	};

	return (
		<>
			<div className='modal tw-max-h-[100vh] tw-h-auto tw-block tw-fixed tw-left-1/2 -tw-translate-x-2/4 tw-top-0 tw-z-30 tw-overflow-y-scroll tw-max-w-[58.5rem] tw-my-[2rem] tw-px-[2rem]'>
				<div className='header tw-flex tw-justify-end'>
					<button
						aria-label='Close'
						className='tw-right-0 tw-top-0 tw-block tw-border-2 tw-p-[1rem] tw-rounded-full tw-leading-none tw-font-bold tw-text-xl hover:tw-cursor-pointer'
						onClick={() => {
							showModal(false);
						}}
					>
						X
					</button>
				</div>
				<div className='body'>
					<figure>
						<img src={image.url} alt={image.title} />
						<figcaption>
							<h2 className='tw-text-center tw-leading-none tw-my-[2rem]'>{image.title}</h2>
						</figcaption>
					</figure>
				</div>
			</div>
			<div
				onClick={() => {
					showModal(false);
				}}
				className='overlay tw-max-h-[100vh] tw-w-full tw-h-full tw-block tw-fixed tw-left-0 tw-top-0 tw-z-20 tw-opacity-80 tw-text-center'
			></div>
		</>
	);
}
