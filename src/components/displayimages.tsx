import "../assets/css/displayimages.css"

const DisplayImages = () => {
  return (
    <div className="images-container">
      <img
        src={require("../../Assets/Images/p2.jpg")}
        alt="Img_1"
        id="dispImg1"
        className="image-item"
      />
      <img
        src={require("../../Assets/Images/p3.jpg")}
        alt="Img_2"
        id="dispImg2"
        className="image-item"
      />
      <img
        src={require("../../Assets/Images/p4.jpg")}
        alt="Img_3"
        id="dispImg3"
        className="image-item"
      />
      <img
        src={require("../../Assets/Images/111.jpg")}
        alt="Img_4"
        id="dispImg4"
        className="image-item"
      />
    </div>
  );
};

export default DisplayImages;