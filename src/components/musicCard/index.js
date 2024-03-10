import React from "react";
import "./musicCard.css";

const MusicCard = ({ imgLink, heading }) => {
  return (
    <div className="musicCard">
      <div className="card-image">
        <img src={imgLink}></img>
      </div>
      <div className="card-heading">{heading}</div>
    </div>
  );
};

export default MusicCard;
