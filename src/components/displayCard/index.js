import React from "react";
import "./displayCard.css";

const DisplayCard = ({ imgLink, heading, subHeading }) => {
  return (
    <div className="displayCard">
      <div className="display-image">
        <img src={imgLink}></img>
      </div>
      <div className="display-text">
        <div className="display-heading">{heading}</div>
        <div className="display-subHeading">{subHeading}</div>
      </div>
    </div>
  );
};

export default DisplayCard;
