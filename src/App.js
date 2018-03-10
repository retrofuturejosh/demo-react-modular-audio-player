import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";
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
            <h4> Code </h4>
          <pre> {
`
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
]

//inside render()
<AudioPlayer
   audioFiles={audioFiles}
/>`} </pre>

{/* DEMO 2 */}
          </div>
        </div>

        <div className="demo-audio-player">
          <div className="demo-title">
            <h3> Default Player </h3>
          </div>
          <AudioPlayer 
            audioFiles={audioFiles}/>
          <div className="demo-code">
            <h4> Code </h4>
          <pre> {
`
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
]

//inside render()
<AudioPlayer
   audioFiles={audioFiles}
/>`} </pre>
          </div>
        </div>



      </div>
    );
  }
}

export default App;
