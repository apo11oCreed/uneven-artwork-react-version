import React, { useState } from 'react';
import Modal from './Modal';

export default function Artwork(props) {
	// ISSUE TO BE FIXED
	const { item, index } = props;

	const [showModal, setShowModal] = useState(false);
	const [activateTrap, setActivateTrap] = useState(false);
	const [modalContent, setModalContent] = useState({});

	return (
		<>
			<li className='galleryTwoCols md:galleryThreeCols tw-rounded-lg tw-mt-[1.5rem] tw-overflow-hidden'>
				<figure className='tw-relative tw-w-auto tw-h-[25rem] tw-overflow-hidden tw-flex tw-justify-center tw-items-center tw-flex-col'>
					<img className='tw-absolute tw-left-[50%] tw-top-[50%] -tw-translate-y-[50%] -tw-translate-x-[50%] tw-max-w-fit' src={item.image.url} alt='' />
					<div className='overlay'></div>
					<figcaption id={`img_${index}`} className='sr tw-relative tw-max-w-[50%] tw-p-[1rem] tw-text-[2rem] tw-leading-[1] tw-text-center'>
						{item.image.title}
					</figcaption>
					<button
						className='tw-relative tw-p-[1rem] tw-bg-ngc-blue-hex tw-rounded-lg tw-font-bold tw-text-2xl tw-flex tw-justify-between tw-items-center tw-leading-none
'
						style={{ color: 'white', fontWeight: 700 }}
						onClick={() => {
							setModalContent(item.image);
							setShowModal(true);
							setActivateTrap(true);
						}}>
						<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-arrows-angle-expand tw-mr-[1rem]' viewBox='0 0 16 16'>
							<path fillRule='evenodd' d='M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z'></path>
						</svg>
						Enlarge
					</button>
				</figure>
			</li>
			{showModal && <Modal image={modalContent} showModal={setShowModal} activateTrap={setActivateTrap} />}
		</>
	);
}
