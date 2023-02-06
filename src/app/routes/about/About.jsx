import React, { useEffect,useState } from 'react';
import CopySingleImage from './CopySingleImage';

export default function About() {

	const contentful = import.meta.env;

	const [copyBaseCollection, setCopyBaseCollection]=useState([]);

	useEffect(() => {
		const spaceId = contentful.VITE_CONTENTFUL_SPACE_ID;
		const accessToken = contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;

		const query = `
			query aboutCopy {
				copyBaseCollection(where:{
					contentfulMetadata:{
						tags:{
							id_contains_some:"pAbout"
						}
					}
				}){
					items{
						id
						title
						text(locale:"en-US"){
							json
						}
						media{
							url
							title
						}
					}
				}
			}
		`;

		let copyImageQuery = [];

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

				copyImageQuery = data.copyBaseCollection.items;

				setCopyBaseCollection(copyImageQuery);

			});
	}, []);

	return (
		<section className='about'>

			<h2 className='tw-text-black tw-text-center tw-font-bold'>About Me</h2>
			{copyBaseCollection.sort((a, b) => a.id - b.id).map((item,index)=>{
				//https://stackoverflow.com/questions/51219133/how-to-sort-a-map-by-a-specific-field-in-es6-react
				return (
					<CopySingleImage key={index} copyimage={item} />
				);
			})}
		</section>
	);
}
