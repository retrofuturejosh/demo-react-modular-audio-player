import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AudioPlayer from 'react-modular-audio-player';


let rearrangedPlayer = [
  {
    className: "tier-top",
    style: {margin: "0.3rem"},
    innerComponents: [
      { 
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "rewind",
        style: {width: "fit-content"}
      },
      {
        type: "forward",
        style: {width: "fit-content"}
      },
      {
        type: "volume"
      }
    ]
  },
  {
    className: "tier-bottom",
    style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
    innerComponents: [
      {
        type: "time",
        style: {width: "fit-content"}
      },
      {
        type: "seek"
      }
    ]
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AudioPlayer 
          audioFiles={[{src: '/audio.mp3'}]}
          hideName={true}
          playerWidth="10rem"
          rearrange={rearrangedPlayer}/>
      </div>
    );
  }
}

export default App;
