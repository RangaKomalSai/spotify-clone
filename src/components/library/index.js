import React from "react";
import "./library.css";
import Playlist from "../playlistCard/index.js";

const Library = () => {
  return (
    <div className="library">
      <div>
        <header className="library-header">
          <div className="library-icon">
            <i class="fi fi-rr-list-music"></i>
          </div>
          <span className="header-text">Your Library</span>
          <div className="plus-icon">
            <i className="fi fi-rr-plus"></i>
          </div>
          <div className="arrow-icon">
            <i class="fi fi-rr-arrow-right"></i>
          </div>
        </header>
        <Playlist />
      </div>
    </div>
  );
};

export default Library;
