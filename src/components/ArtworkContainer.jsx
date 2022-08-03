import React, { Suspense } from 'react';
import Loader from './Loader';
const Artwork = React.lazy(()=>import('./Artwork'));

export default function ArtworkContainer(props) {
	const { imageCollection } = props;

	return (
		<>
			<ul className='tw-flex tw-flex-wrap tw-justify-between'>
				{imageCollection.map((item, index) => {
                    console.log(index);
					return (
						<Suspense
							fallback={<Loader />}>
							<Artwork item={item} key={index} index={index} />
						</Suspense>
					);
				})}
			</ul>
		</>
	);
}
