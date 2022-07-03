import React, { useState, useEffect } from "react";
import Artwork from "./Artwork";

export default function Gallery(props) {
	
	const contentful = import.meta.env;
	const spaceId = contentful.VITE_CONTENTFUL_SPACE_ID;
	const accessToken = contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
	const query = `
	{
		imageCollection{
		 items{
		   image{
			 fileName
			 url
		   }
		 }
	   }
	 }
	`;

	const [images, setImages] = useState({});

	useEffect(() => {
		const fetchData = async () =>{
			const results = await fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				body: JSON.stringify({
					query,
				}),
			})
			.then((res) => res.json())
			.then((response) => {

				const { data } = response;
				setImages(contentfulData(data));

			});
		}

		fetchData()
		.catch(console.error);

	}, [images]);

	console.log(images);

	return (
		<section className="gallery">
			<Artwork images={images} />
		</section>
	);
}

function contentfulData(el){
	console.log(el);
	return el;
};