import React, { Component } from "react";
import imgUrl from '../img/022222_ncorreia_illustration_colored-pencil.jpg';

class Artwork extends Component {
    //   const [count, setCount] = useState(0)
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
          {/* <div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div>
					<div className="img" src="https://picsum.photos/200/300"></div> */}
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
            <img src={imgUrl} alt="Illustration" />
          </picture>
        </>
      )
    }
  }
    
export default Artwork