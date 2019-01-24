import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="ui segment">
          <h4 className="ui header">Title: {video.snippet.title}</h4>
          <p className="ui header"> Description: {video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
