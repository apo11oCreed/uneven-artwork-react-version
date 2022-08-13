import React, { Suspense } from 'react';
import Loader from '../Common/Loader';
const Artwork = React.lazy(()=>import('./Artwork'));

export default function ArtworkContainer({ imageCollection }) {

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
