import React, { Component } from "react";
import YouTube from "react-youtube";


class ReactYouTubeExample extends Component {

  render() {
    const opts = {
      playerVars: {
        autoplay: 1
      }
    };
    const { videoId } = this.props;

    return (

      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />

    );
  }
}

export default ReactYouTubeExample;
