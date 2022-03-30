 import React ,{FC} from 'react';
import "../assets/css/displayimages.css"

 export const DisplayImages :FC = () => {
  return (
    <div className="images-container">
      <img
        src={require("../assets/images/p2.jpg")}
        alt="Img_1"
        id="dispImg1"
        className="image-item"
      />
      <img
        src={require("../assets/images/p3.jpg")}
        alt="Img_2"
        id="dispImg2"
        className="image-item"
      />
      <img
        src={require("../assets/images/p4.jpg")}
        alt="Img_3"
        id="dispImg3"
        className="image-item"
      />
      <img
        src={require("../assets/images/111.jpg")}
        alt="Img_4"
        id="dispImg4"
        className="image-item"
      />
    </div>
  );
};

