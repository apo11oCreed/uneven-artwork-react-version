import React, { Component } from "react";

import ImgUrl1 from "../img/022222_ncorreia_illustration_colored-pencil.jpg";
import ImgUrl2 from "../img/040522_ncorreia_illustration_pencil.jpg";
import ImgUrl3 from "../img/123121_ncorreia_reference.jpeg";
import ImgUrl4 from "../img/011822_ncorreia_flower.jpeg";

class Artwork extends Component {
	//   const [count, setCount] = useState(0)
	constructor(props) {
		super(props);
    this.state={
      imageIsReady:false,
    }
    this.imgArray=[ImgUrl1,ImgUrl2,ImgUrl3,ImgUrl4];
    this.imgQty=this.imgArray.length;
    this.counter=0;
    this.incrementCounter=this.incrementCounter.bind(this);
	}

  componentDidMount(){

    for(let i=0;i<this.imgArray.length;i++){

      const img = new Image();

      img.src=this.imgArray[i];

      if(img.complete){

        this.incrementCounter();

      } else {

        img.addEventListener('load',this.incrementCounter,false);

      }

    }

  }

  incrementCounter(){

    this.counter++;

    if(this.counter === this.imgQty){

      this.setState({ imageIsReady: true });

    }

  }

	render() {

    const { imageIsReady } = this.state;

    if (!imageIsReady) {

      return <p className="tw-text-center">Loading...</p>

    } else {

      return (
        // <ul className="tw-grid tw-grid-cols-2 tw-grid-rows-4 md:tw-grid-cols-3">
          <ul className="tw-flex tw-flex-wrap tw-justify-between">
          {/* <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div>
            <div className="img" src="https://picsum.photos/200/300"></div> */}
          <li className="galleryTwoCols md:galleryThreeCols">
            <picture>
              {/* Condition for webp */}
              {/* Condition for mobile */}
              {/* Condition for tablet */}
              {/* Condition for desktop */}
              {/* <source srcset="./images/022222_ncorreia_illustration_colored-pencil_992.jpg" media="(min-width:992px)"  type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_768.jpg" media="(min-width:768px)" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_480.jpg" media="(min-width:480px)" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil_320.jpg" type="image/jpeg" />
                        <source srcset="./images/022222_ncorreia_illustration_colored-pencil.webp" type="image/webp" /> */}
              <img src={ImgUrl1} alt="Mixed media of reference" />
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
          </li>
        </ul>

      );

    }

	}

}

export default Artwork;
