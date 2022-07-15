import React, { useState } from 'react';
import Modal from './Modal';

export default function Artwork(props) {
	// ISSUE TO BE FIXED
	const { imageCollection } = props;

	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState({});
	let modalImage;

	return (
		<>
			<ul className='tw-flex tw-flex-wrap tw-justify-between'>
				{imageCollection.map((item, index) => {
					modalImage = item.image;
					return (
						<li key={index} className='galleryTwoCols md:galleryThreeCols tw-rounded-lg tw-mt-[1.5rem] tw-overflow-hidden'>
							<figure className='tw-relative tw-w-auto tw-h-[25rem] tw-overflow-hidden tw-flex tw-justify-center tw-items-center tw-flex-col'>
								<img className='tw-absolute tw-left-[50%] tw-top-[50%] -tw-translate-y-[50%] -tw-translate-x-[50%] tw-max-w-fit' src={item.image.url} />
								<div className='overlay'></div>
								<figcaption className='tw-relative tw-max-w-[50%] tw-p-[1rem] tw-text-[2rem] tw-leading-[1] tw-text-center'>{item.image.title}</figcaption>
								<button
									className='tw-relative tw-block tw-p-[1rem] tw-bg-ngc-blue-hex tw-rounded-lg tw-font-bold'
									style={{ color: 'white', fontWeight: 700 }}
									onClick={() => {
										modalImage = item.image;
										setModalContent(item.image);
										setShowModal(true);
									}}
								>
									View Details
								</button>
							</figure>
						</li>
					);
				})}
			</ul>
			{showModal && <Modal image={modalContent} showModal={setShowModal} />}
		</>
	);
}
