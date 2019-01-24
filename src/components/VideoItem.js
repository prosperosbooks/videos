import "./VideoItem.css";
import React from "react";
import VideoDetail from "./VideoDetail";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.id.videoId}
      />
      <div className="content">
        <div className="header">
          <VideoDetail />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
