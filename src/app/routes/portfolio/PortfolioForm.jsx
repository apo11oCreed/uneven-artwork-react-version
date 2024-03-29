import React, { useState, useEffect, useRef } from 'react';
import ArtworkContainer from '../../../features/portfolio/PortfolioContainer';
import { useSelector, useDispatch } from 'react-redux';
import { filterImages, changeCategory } from '../../../app/store/slices/portfolioSlice';

export default function PortfolioForm() {
	const imagesSelector = useSelector((state) => state.portfolio.images);
	const dispatch = useDispatch();

	const filterSelector = useRef();
	const portfolioTitle = useRef();

	const contentful =
		import.meta.env;
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

	const [tagFilter, setTagFilter] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	let imagesQuery = [],
		assetsQuery = [];

	useEffect(() => {
		window.fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
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

				// Update images data array in redux store
				dispatch(filterImages(imagesQuery));

				// Initial filter options
				setTagFilter([...new Set(tags)]);

				// Precache images
				cacheImages(imageUrls, setIsLoading);

			});

		if (filterSelector && filterSelector.current) {
			filterSelector.current.addEventListener('change', filter);
		}
		else {
			filterSelector.current.removeEventListener('change', filter);
		}
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

	// filterSelector should be converted to feature and added to Store to render based on the state of the Select drop down

	const filter = (e) => {
		let filteredArray = [];

		if (e.target.value == 'all') {
			filteredArray = imagesQuery;
		}
		else {
			filteredArray = imagesQuery.filter((item) => {

				const tags = item.image.contentfulMetadata.tags;

				if (tags[0].name == undefined) {
					console.log(tags[0] + ' image is missing a tag.');
				} else {

					if (tags.length > 1) {
						let filteredTags = tags.filter((item) => {
							return item.name == e.target.value;
						});
						if(filteredTags.length){
							return filteredTags[0].name == e.target.value;
						}
					} else {
						return tags[0].name == e.target.value;
					}
				}
			});
		}

		portfolioTitle.current.innerHTML = `${e.target.value} Samples`;

		// build dispatch action
		dispatch(filterImages(filteredArray));
		dispatch(changeCategory(filterSelector.current.value));
	};

	return (
		<section className='portfolio'>
			<form>
				<legend>
					<h2 ref={portfolioTitle} className='tw-font-bold tw-capitalize tw-text-center tw-mb-[2rem]'>
						All Samples
					</h2>
				</legend>
				<label htmlFor='tagName'>Select Category</label>
				<select name='tag' id='tagName' ref={filterSelector}>
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
			<ArtworkContainer imageCollection={imagesSelector} />
		</section>
	);
}
