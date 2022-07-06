import React, { useState, useEffect } from "react";
import Artwork from "./Artwork";

export default function Gallery(props) {
	console.log("GALLERY");
	const contentful = import.meta.env;
	const spaceId = contentful.VITE_CONTENTFUL_SPACE_ID;
	const accessToken = contentful.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;
	const query = `
	query {
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
		assetCollection{
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

	const [imgCollection, setImgCollection] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [tags,setTags] = useState([]);

	let imgs=[];


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

				setImgCollection(data);

				imgs = data.imageCollection.items.map(item => {
					return item.image.url;
				});

				const assets=data.assetCollection.items.map(item=>{
					return item.contentfulMetadata.tags[0].name;
				});

				setTags([...new Set(assets)]);

				cacheImages(imgs, setIsLoading);
			});
	}, []);

	return <section className="gallery">
		<form>
			<legend>Filter</legend>
			<select name="tag" id="tagName" defaultValue="all">
				<option value="all">All</option>
				{tags.map((tag,index)=>{
					return <option value={tag} key={index} >{tag}</option>
				})}
			</select>
		</form>
		{isLoading ? <p>Loading</p> : <Artwork imageCollection={imgCollection.imageCollection} />}
	</section>;
}

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
