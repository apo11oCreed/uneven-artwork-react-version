import React, { useState, useEffect } from "react";

export default function Artwork(props) {

  console.log(props);
  const [imageReady, setImageReady] = useState(false);
  const {images} = props;
  const imgArray = images;
  const imgQty = imgArray.length;

  let counter=0;

  useEffect(()=>{
    componentDidMount(imgArray);
  },[]);

	if (imageReady == false) {
		return <p className="tw-text-center">Loading...</p>;
	} else {
		return (
			// <ul className="tw-grid tw-grid-cols-2 tw-grid-rows-4 md:tw-grid-cols-3">
			<ul className="tw-flex tw-flex-wrap tw-justify-between">
				{this.imgArray.map((item, index) => {
					return (
						<li key={index} className="galleryTwoCols md:galleryThreeCols">
							<img src={item.image.url} />
						</li>
					);
				})}
				{/* <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div> */}

				{/* <li className="galleryTwoCols md:galleryThreeCols">
            <picture> */}
				{/* Condition for webp */}
				{/* Condition for mobile */}
				{/* Condition for tablet */}
				{/* Condition for desktop */}
				{/* <source srcset="./images/022222_ncorreia_illustration_colored-pencil_992.jpg" media="(min-width:992px)"  type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_768.jpg" media="(min-width:768px)" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_480.jpg" media="(min-width:480px)" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_320.jpg" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil.webp" type="image/webp" /> */}
				{/* <img src={ImgUrl1} alt="Mixed media of reference" />
            </picture>
          </li>
          <li className="galleryTwoCols md:galleryThreeCols">
            <picture>
              <img src={ImgUrl2} alt="Pencil illustration" />
            </picture>
          </li>
          <li className="galleryTwoCols md:galleryThreeCols">
            <picture>
              <img src={ImgUrl3} alt="Mixed media of reference" />
            </picture>
          </li>
          <li className="galleryTwoCols md:galleryThreeCols">
            <picture>
              <img src={ImgUrl4} alt="Painting of Sunflower" />
            </picture>
          </li> */}
			</ul>
		);
	}
}

function componentDidMount(array) {
	for (let i = 0; i < array.length; i++) {
		const img = new Image();

		img.src = array[i].image.url;

		if (img.complete) {
			incrementCounter();
		} else {
			img.addEventListener("load", incrementCounter, false);
		}
	}
}

function incrementCounter() {
	counter++;

	if (counter === imgQty) {
		setImageReady(true);
	}
}
