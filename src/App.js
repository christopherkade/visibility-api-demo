import React, { Component } from 'react';
import Youtube from 'react-youtube'
import './App.css';

class App extends Component {
  /**
   * Changes the current favicon with the one given as parameter
   */
  changeFavicon = link => {
    const favicon = document.querySelector('link')
    favicon.href = link;
  }

  /**
   * Catches visibility changes
   * On hidden: pause video and change favicon to pause icon
   * On shown: play video and change favicon to start icon
   */
  handleVisibilityChange = () => {    
    window.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.changeFavicon("https://user-images.githubusercontent.com/15229355/54630478-3eb49b80-4a7a-11e9-889e-82cd455e57d1.png")
        this.state.player.pauseVideo()
      } else {
        this.changeFavicon("https://cdn1.iconfinder.com/data/icons/material-audio-video/20/play-circle-fill-128.png")        
        this.state.player.playVideo()
      }
    })
  }

  /**
   * Once the video has started save the player's state
   */
  _onPlay = (event) => {
    this.setState({
      player: event.target
    });
    
    this.handleVisibilityChange()
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    };
 
    return (
      <div className="App">
        <header className="content">        
          <Youtube
            opts={opts}
            onPlay={this._onPlay}
            videoId="nx1tOOc_3fU" />
        </header>
      </div>
    );
  }
}

export default App;
