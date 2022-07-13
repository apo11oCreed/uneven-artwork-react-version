import React, { useState, useEffect } from 'react';
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
						<li key={index} className='galleryTwoCols md:galleryThreeCols  tw-mt-[1.5rem]'>
							<figure className='tw-relative tw-w-auto tw-h-[25rem] tw-overflow-hidden'>
								<img
									className='tw-absolute tw-left-[50%] tw-top-[50%] -tw-translate-y-[50%] -tw-translate-x-[50%] tw-cursor-pointer tw-max-w-fit'
									src={item.image.url}
									onClick={() => {
										modalImage = item.image;
										setModalContent(item.image);
										setShowModal(true);
									}}
								/>
								<figcaption>{item.image.title}</figcaption>
							</figure>
						</li>
					);
				})}
			</ul>
			{showModal && <Modal image={modalContent} showModal={setShowModal} />}
		</>
	);
}
