import React, { useState, useEffect } from "react";

export default function Artwork(props) {

	console.log('ARTWORK');

	const { imageCollection } = props;
	const imgArray = imageCollection.items;

	return (
		<ul className="tw-flex tw-flex-wrap tw-justify-between">
				{imgArray.map((item, index) => {
          console.log(item.image);
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
