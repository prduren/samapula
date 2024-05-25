import React from "react";
import newImage from "../images/newImage.png";

const Image = () => {
  // img-fluid class is a Bootstrap class that allows for auto responsiveness
  return (
    <div className="galleryImageDiv">
      <img className="galleryImage img-fluid" src={newImage} alt="image" />
    </div>
  );
};

export default Image;
