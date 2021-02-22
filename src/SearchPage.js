import React, {useState, useEffect } from "react";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
const SearchPage = ({ videos }) => {
  
    

    const listOfVideos = videos.map(video => (   
        <VideoRow
          key={video.id.videoId}
          views="777M views"
          subs="100k"
          description={video.snippet.description}
          timestamp={video.snippet.publishTime}
          channel={video.snippet.channelTitle}
          title={video.snippet.title}
          image={video.snippet.thumbnails.medium.url}
         
        />
    ));
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <div className="searchPage__videoRow">
        {listOfVideos}
      </div>
    </div>
  );
};

export default SearchPage;
