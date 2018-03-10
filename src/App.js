import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";

import examples from './exampleCode'
import './index.css'

let audioFiles = [
    {
      src: "/heyJude.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    },
    {
      src: "/uptownFunk.mp3",
      title: "Uptown Funk ft. Bruno Mars",
      artist: "Mark Ronson"
    },
    {
      src: "/rollingInTheDeep.mp3",
      title: "Rolling In The Deep",
      artist: "Adele"
    }
  ],
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { margin: "0.3rem" },
      innerComponents: [
        {
          type: "play",
          style: { width: "fit-content" }
        },
        {
          type: "rewind",
          style: { width: "fit-content" }
        },
        {
          type: "forward",
          style: { width: "fit-content" }
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
      innerComponents: [
        {
          type: "time",
          style: { width: "fit-content" }
        },
        {
          type: "seek"
        }
      ]
    }
  ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCode: []
    }
  }

  showCode(e, idx){
    let currentCodes = this.state.showCode.slice();
    let currentIdx = currentCodes.indexOf(idx);
    currentIdx === -1 
    ? currentCodes.push(idx)
    : currentCodes.splice(currentIdx, 1);
    this.setState({showCode: currentCodes})
  }

  renderCodeHeader(idx) {
    return (<h4
      onClick={e => this.showCode(e, 1)}> {this.state.showCode.includes(idx)
      ? 'Hide Code'
      : 'Show Code'
    }</h4>)
  }

  render() {
    return (
      <div className="App">
        <header className="demo-header">
          <h1 className="demo-header-title">Examples of react-modular-audio-player</h1>
        </header>

{/* DEMO 1 */}
        <div className="demo-audio-player">
          <div className="demo-title">
            <h3> Default Player </h3>
          </div>
          <AudioPlayer 
            audioFiles={audioFiles}/>
          <div className="demo-code">
            {this.renderCodeHeader(1)}
          {
            this.state.showCode.includes(1)
            ? (<pre> {examples.defaultPlayer} </pre>)
            : null
          }
          </div>
        </div>

{/* DEMO 2 */}
        <div className="demo-audio-player">
          <div className="demo-title">
            <h3> Default Player with Styling </h3>
          </div>
          <div className="audio-player-one">
            <AudioPlayer 
              audioFiles={audioFiles}/>
          </div>
          <div className="demo-code"
            onClick={e => this.showCode(e, 2)}>
            {this.renderCodeHeader(2)}
          {
            this.state.showCode.includes(2)
            ? (<pre> {examples.defaultWithStyle} </pre>)
            : null
          }
          </div>
        </div>



      </div>
    );
  }
}

export default App;
