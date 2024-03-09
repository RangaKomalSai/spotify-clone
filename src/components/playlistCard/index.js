import React from "react";
import "./playlistCard.css";
const PlaylistCard = ({ imgLink, heading, subHeading }) => {
  return (
    <div className="playlistCard">
      <div className="image">
        <img src={imgLink} alt="img"></img>
      </div>
      <div className="card-info">
        <div className="playlist-heading">
          <p>{heading}</p>
        </div>
        <div className="playlist-text">{subHeading}</div>
      </div>
    </div>
  );
};

const Playlist = () => {
  return (
    <>
      <PlaylistCard
        imgLink="https://i1.sndcdn.com/artworks-y6qitUuZoS6y8LQo-5s2pPA-t500x500.jpg"
        heading="Liked Songs"
        subHeading="Playlist &#x2022; 10 Songs"
      />
      <PlaylistCard
        imgLink="https://i.scdn.co/image/ab67706f00000002635768485509eb5300902147"
        heading="Fav Songs"
        subHeading="Playlist &#x2022; RKS"
      />
      <PlaylistCard
        imgLink="https://i.scdn.co/image/ab67706f000000024dec12ab8049bf2fe54ae781"
        heading="Tollywood Pearls"
        subHeading="Playlist &#x2022; Spotify"
      />
      <PlaylistCard
        imgLink="https://i.scdn.co/image/ab67706f00000002faf17eee35be338d814b92a3"
        heading="All Out 10's"
        subHeading="Playlist &#x2022; Spotify"
      />
      <PlaylistCard
        imgLink="https://i.scdn.co/image/ab67706f00000002319bd79eba1610f1f5fe6a4b"
        heading="Hot Hits India"
        subHeading="Playlist &#x2022; Spotify"
      />
      <PlaylistCard
        imgLink="https://i.scdn.co/image/ab67616d0000b27385efa87a5eafe030b2495b7e"
        heading="Sita Ramam Telugu"
        subHeading="Album &#x2022; Spotify"
      />
    </>
  );
};

export default Playlist;
