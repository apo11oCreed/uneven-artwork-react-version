import React, { Suspense } from 'react';
import Loader from './Loader';
const Artwork = React.lazy(()=>import('./Artwork'));

export default function ArtworkContainer(props) {
	const { imageCollection } = props;

	return (
		<>
			<ul className='tw-flex tw-flex-wrap tw-justify-between'>
				{imageCollection.map((item, index) => {
					return (
						<Suspense
							fallback={<Loader />} key={index}>
							<Artwork item={item} index={index} />
						</Suspense>
					);
				})}
			</ul>
		</>
	);
}
