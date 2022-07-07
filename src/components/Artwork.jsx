import React, { useState, useEffect } from "react";

export default function Artwork(props) {

	const { imageCollection } = props;
	console.log(imageCollection);

	return (
		<ul className="tw-flex tw-flex-wrap tw-justify-between">
				{imageCollection.map((item, index) => {
					return (
						<li key={index} className="galleryTwoCols md:galleryThreeCols">
              <figure>
              <img src={item.image.url} />
              <figcaption>{item.image.title}</figcaption>
              </figure>
						</li>
					);
				})}
			</ul>
	);
}
