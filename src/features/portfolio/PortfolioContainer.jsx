import React, { Suspense } from 'react';
import Loader from '../../app/components/common/Loader';
const Artwork = React.lazy(()=>import('./Portfolio'));

export default function ArtworkContainer({ imageCollection }) {

	return (
			<ul className='tw-flex tw-flex-wrap tw-justify-between'>
				{imageCollection.map((item, index) => {
					return (
						<Suspense
							fallback={<li><Loader /></li>} key={index}>
							<Artwork item={item} index={index} />
						</Suspense>
					);
				})}
			</ul>
	);
}
