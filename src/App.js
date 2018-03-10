import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";

import "./index.css";

import {defaultPlayer, defaultWithStyle} from "./exampleCode";
import {audioFiles} from "./setUp";
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
      <h4 onClick={e => this.showCode(e, 1)}>
        {" "}
        {this.state.showCode.includes(idx) ? "Hide Code" : "Show Code"}
      </h4>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="demo-header">
          <h1 className="demo-header-title">
            Examples of react-modular-audio-player
          </h1>
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
      </div>
    );
  }
}

export default App;
