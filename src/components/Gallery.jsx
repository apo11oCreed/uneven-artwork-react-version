import React, { useState, useEffect } from "react";
import Artwork from "./Artwork";

export default function Gallery(props) {
	console.log("GALLERY");
	const contentful = import.meta.env;
	const spaceId = contentful.VITE_CONTENTFUL_SPACE_ID;
	const accessToken = contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
	const query = `
	{
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
	  }
	`;

	const [images, setImages] = useState({});

	useEffect(() => {
		window
			.fetch(`https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/master`, {
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
			.then(({ data, errors }) => {
				if (errors) {
					console.error(errors);
				}

				setImages(data);
			});
	}, []);

	return <section className="gallery">{images.imageCollection ? <Artwork imageCollection={images.imageCollection} /> : <p>Loading</p>}</section>;
}
