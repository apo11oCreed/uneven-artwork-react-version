import React, { useEffect } from 'react';
import { tabbable } from 'tabbable';
import FocusTrap from 'focus-trap-react';
import { useSelector, useDispatch } from 'react-redux';
import { defineImage, isVisible } from '../../../app/store/slices/modalSlice';

export default function Modal({ image, showModal, activateTrap }) {

	const dispatch = useDispatch();

	useEffect(() => {
		if (process.env.NODE_ENV !== 'production') {
			const body = document.querySelector('.modal');
			const tabbables = tabbable(body, [{ includeContainer: true }]);
		}

		document.addEventListener('keyup', handleEscapeKey);
		return () => document.removeEventListener('keyup', handleEscapeKey);
	}, []);

	const handleEscapeKey = (e) => {
		if (e.keyCode == 13 || e.keyCode == 27) {
			dispatch(isVisible(false));
			activateTrap(false);
		}
	};

	return (
		<FocusTrap>
			<div>
				<div className='modal xs:tw-w-full sm:tw-max-h-[100vh] tw-h-full tw-block tw-fixed tw-left-1/2 -tw-translate-x-2/4 tw-top-0 sm:tw-top-2/4 sm:-tw-translate-y-2/4  tw-z-30 sm:tw-max-w-[58.5rem] tw-my-[2rem] sm:tw-px-[2rem]' role='dialog' aria-labelledby='dialog_label' aria-describedby='dialog_description' aria-modal='true' tabIndex='0'>
					<div className='header tw-flex tw-justify-end tw-py-[1rem] tw-w-full tw-fixed'>
						<button
							aria-label='Close'
							className='tw-border-black tw-right-0 tw-text-[2.6rem] tw-top-0 tw-block tw-border-2 tw-p-[1rem] tw-rounded-full tw-font-bold hover:tw-cursor-pointer hover:tw-opacity-[0.5] hover:tw-scale-[1.125] tw-leading-[75%]'
							onClick={() => {
								dispatch(isVisible(false));
								activateTrap(false);
							}}>
							X
						</button>
					</div>
					<div className='body tw-my-[6.5rem] tw-overflow-y-scroll'>
						<figure>
							<img src={image.url} alt={image.title} />
							<figcaption>
								<h2 className='tw-text-center tw-leading-none tw-my-[2rem]' id='dialog_label'>
									{image.title}
								</h2>
								<p id='dialog_description'>{image.description}</p>
							</figcaption>
						</figure>
					</div>
				</div>
				<div
					onClick={() => {
						dispatch(isVisible(false));
						activateTrap(false);
					}}
					className='overlay tw-max-h-[100vh] tw-w-full tw-h-full tw-block tw-fixed tw-left-0 tw-top-0 tw-z-20 tw-opacity-80 tw-text-center'></div>
			</div>
		</FocusTrap>
	);
}
