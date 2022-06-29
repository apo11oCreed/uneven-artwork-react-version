import React from "react";
import Artwork from "./Artwork";

export default function Gallery(props) {

	const {images}=props;

	return (
		<section className="gallery">
			<Artwork items={images.imageCollection} />
		</section>
	);
}
