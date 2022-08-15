import React, { useState, useEffect } from 'react';
import ArtworkContainer from './ArtworkContainer';
import { useDispatch } from 'react-redux';

export default function GalleryForm() {
	const contentful = import.meta.env;

	const [imgCollection, setImgCollection] = useState([]);
	const [tagFilter, setTagFilter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const dispatch=useDispatch();

	useEffect(() => {
		const spaceId = contentful.VITE_CONTENTFUL_SPACE_ID;
		const accessToken = contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
		const query = `
	query imagesAssets {
		imageCollection{
			items{
				image{
					title
					description
					url
					contentfulMetadata{
						tags{
							name
						}
					}
				}
			}
		}
		assetCollection(where:{
			contentfulMetadata:{
			  tags_exists:true
			}
		  }){
			items{
				contentfulMetadata{
					tags{
						name
					}
				}
			}
		}
	}
	`;

		let imagesQuery = [],
			assetsQuery = [];

		dispatch();

		window
			.fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
				method: 'POST',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({
					query,
				}),
			})
			.then((res) => res.json())
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}

				imagesQuery = data.imageCollection.items;
				const imageUrls = imagesQuery.map((item) => {
					return item.image.url;
				});

				assetsQuery = data.assetCollection.items;
				const tags = assetsQuery.map((item) => {
					return item.contentfulMetadata.tags[0].name;
				});

				// Initial rendering of portfolio images
				setImgCollection(imagesQuery);

				// Initial filter options
				setTagFilter([...new Set(tags)]);

				// Precache images
				cacheImages(imageUrls, setIsLoading);
			});

		const filterSelector = document.getElementById('tagName');
		const galleryTitle = document.getElementById('galleryTitle');

		// filterSelector should be converted to feature and added to Store to render based on the state of the Select drop down

		filterSelector.addEventListener('change', (e) => {

			// build dispatch action

			let filteredArray = [];

			if (e.target.value == 'all') {
				filteredArray = imagesQuery;
			} else {
				filteredArray = imagesQuery.filter((item) => {
					return item.image.contentfulMetadata.tags[0].name == e.target.value;
				});
			}

			galleryTitle.innerHTML = `${e.target.value} Samples`;

			setImgCollection(filteredArray);
		});
	}, []);

	const cacheImages = async (imgArray, set) => {
		const promises = await imgArray.map((src) => {
			return new Promise((resolve, reject) => {
				const img = new Image();

				img.src = src;
				img.onload = resolve();
				img.onerror = reject();
			});
		});

		await Promise.all(promises);

		set(false);
	};

	return (
		<section className='gallery'>
			<form>
				<legend>
					<h2 id='galleryTitle' className='tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]'>
						All Samples
					</h2>
				</legend>
				<label htmlFor='tagName'>Select Category</label>
				<select name='tag' id='tagName'>
					<option value='all'>All</option>
					{tagFilter.map((tag, index) => {
						return (
							<option value={tag} key={index}>
								{tag}
							</option>
						);
					})}
				</select>
			</form>
			<ArtworkContainer imageCollection={imgCollection} />
		</section>
	);
}
