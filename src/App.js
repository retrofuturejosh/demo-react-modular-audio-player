import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";

import "./index.css";

import {
  defaultPlayer, 
  defaultWithStyle,
  rearrangeExample
} from "./exampleCode";
import {audioFiles, rearrangedPlayer} from "./setUp";
import renderExamples from "./renderExamples";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showCode: [],
      renderExamples: renderExamples.bind(this)
    };
    this.showCode = this.showCode.bind(this);
    this.renderCodeHeader = this.renderCodeHeader.bind(this);
  }

  showCode(e, idx) {
    let currentCodes = this.state.showCode.slice();
    let currentIdx = currentCodes.indexOf(idx);
    currentIdx === -1
      ? currentCodes.push(idx)
      : currentCodes.splice(currentIdx, 1);
    this.setState({ showCode: currentCodes });
  }

  renderCodeHeader(idx) {
    return (
      <div className="toggle-code">
        <h4 onClick={e => this.showCode(e, idx)}>
          {this.state.showCode.includes(idx) ? "Hide Code" : "Show Code"}
        </h4>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="demo-header">
          <h1 className="demo-header-title">
            react-modular-audio-player
          </h1>
          <p> by Josh Sohn (<a href="http://www.joshdsohn.com">www.joshdsohn.com</a>) </p>
        </header>

        {/* DEMO 1 */}
        {this.state.renderExamples(
          "Default Player",
          "audio-player-default",
          <AudioPlayer audioFiles={audioFiles} />,
          defaultPlayer,
          1
        )}

        {/* DEMO 2 */}
        {this.state.renderExamples(
          "Default Player with Styling",
          "audio-player-one",
          <AudioPlayer audioFiles={audioFiles} />,
          defaultWithStyle,
          2
        )}

        {/* DEMO 3 */}
        {this.state.renderExamples(
          "Using Rearrange Prop with Styling",
          "audio-player-two",
          <AudioPlayer 
            audioFiles={audioFiles}
            rearrange={rearrangedPlayer}
            playerWidth={"10rem"} 
            iconSize="1.5rem"
            fontSize="1rem"
            sliderClass="invert-blue-grey"/>,
          rearrangeExample,
          3
        )}

      </div>
    );
  }
}

export default App;
