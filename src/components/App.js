import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onInputSubmit = async input => {
    const response = await youtube.get("/search", {
      params: {
        q: input
      }
    });

    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  onVideoSelect = video => {
    console.log("From the API", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onInputSubmit} />I have{" "}
        {this.state.videos.length} videos.
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
