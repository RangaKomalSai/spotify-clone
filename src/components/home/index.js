import React from "react";
import "./home.css";
import MusicCard from "../musicCard/index.js";
import DisplayCard from "../displayCard/index.js";
import { musicDetails } from "../playlistCard/index.js";

const Home = () => {
  return (
    <div>
      <div className="header-cards-container">
        <header className="app-right-header">
          <div className="app-right-header-1">
            <div className="left-arrow-container">
              <i class="fi fi-rr-angle-left"></i>
            </div>
            <div className="right-arrow-container">
              <i class="fi fi-rr-angle-right"></i>
            </div>
          </div>
          <div className="app-right-header-2">
            <div className="bell-container">
              <i class="fi fi-rr-down-to-line"></i>
            </div>
            <div className="bell-container">
              <i class="fi fi-rr-bell"></i>
            </div>
            <div className="user-container">
              <i class="fi fi-rr-user"></i>
            </div>
          </div>
        </header>
        <div className="musicCard-container">
          <ul className="home" type="none">
            {musicDetails.map((details) => (
              <MusicCard
                imgLink={details.imgLink}
                heading={details.heading}
                subHeading={details.subHeading}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="app-right-body">
        <p className="a-text">
          <a href="https://www.google.com">Recently Played</a>
        </p>
        <div className="displayCard-container">
          <ul className="home" type="none">
            {musicDetails.map((details) => (
              <DisplayCard
                imgLink={details.imgLink}
                heading={details.heading}
                subHeading={details.subHeading}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
