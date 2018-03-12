import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";

import "./index.css";

import {
  defaultPlayer,
  defaultWithStyle,
  rearrangeExample,
  picturePlayExample,
  customIconExample,
  overlayExample
} from "./exampleCode";
import {
  audioFiles,
  rearrangedPlayer,
  picRearrange,
  rearrangedPlayerTwo,
  picOverlay
} from "./setUp";
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
          <h1 className="demo-header-title">react-modular-audio-player</h1>
          <p>
            {" "}
            by Josh Sohn (<a href="http://www.joshdsohn.com">
              www.joshdsohn.com
            </a>){" "}
          </p>
        </header>

        {/* DEMO 1 */}
        {this.state.renderExamples(
          "Default Player",
          "audio-player-default",
          [<AudioPlayer audioFiles={audioFiles} />],
          defaultPlayer,
          1
        )}

        {/* DEMO 2 */}
        {this.state.renderExamples(
          "Default Player with Styling",
          "audio-player-one",
          [<AudioPlayer audioFiles={audioFiles} />],
          defaultWithStyle,
          2
        )}

        {/* DEMO 3 */}
        {this.state.renderExamples(
          "Using Rearrange Prop with Styling",
          "audio-player-two",
          [
            <AudioPlayer
              audioFiles={audioFiles}
              rearrange={rearrangedPlayer}
              playerWidth={"10rem"}
              iconSize="1.5rem"
              fontSize="1rem"
              sliderClass="invert-blue-grey"
            />
          ],
          rearrangeExample,
          3
        )}

        {/* DEMO 4 */}
        {this.state.renderExamples(
          "Using Custom Icons and Rearrange Prop",
          "audio-player-three",
          [
            <AudioPlayer
              audioFiles={audioFiles}
              rearrange={rearrangedPlayerTwo}
              iconSize="1.5rem"
              playIcon="/playIcon.png"
              playHoverIcon="/playHoverIcon.png"
              pauseIcon="/pauseIcon.png"
              pauseHoverIcon="/pauseIcon.png"
              rewindIcon="/rewindIcon.png"
              rewindHoverIcon="/rewindHoverIcon.png"
              forwardIcon="/forwardIcon.png"
              forwardHoverIcon="/forwardHoverIcon.png"
              volumeIcon="/volumeIcon.png"
              volumeEngagedIcon="/volumeIcon.png"
              muteIcon="/muteIcon.png"
              muteEngagedIcon="/muteIcon.png"
              loopIcon="/loopIcon.png"
              loopEngagedIcon="/loopEngagedIcon.png"
              fontFamily="serif"
              fontSize="1.5rem"
              playerWidth="15rem"
            />
          ],
          customIconExample,
          4
        )}

        {/* DEMO 5 */}
        {this.state.renderExamples(
          "Picture as play/pause button",
          "audio-player-four",
          [
            <AudioPlayer
              audioFiles={[
                {
                  src: "/heyJude.mp3",
                  title: "Hey Jude",
                  artist: "The Beatles"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon="/beatlesPic.png"
              playHoverIcon="/beatlesPic.png"
              pauseIcon="/beatlesPic.png"
              pauseHoverIcon="beatlesPic.png"
            />,
            <AudioPlayer
              audioFiles={[
                {
                  src: "/uptownFunk.mp3",
                  title: "Uptown Funk ft. Bruno Mars",
                  artist: "Mark Ronson"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon="/upTownFunk.png"
              playHoverIcon="/upTownFunk.png"
              pauseIcon="/upTownFunk.png"
              pauseHoverIcon="/upTownFunk.png"
            />,
            <AudioPlayer
              audioFiles={[
                {
                  src: "/rollingInTheDeep.mp3",
                  title: "Rolling In The Deep",
                  artist: "Adele"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon="/rolling.png"
              playHoverIcon="/rolling.png"
              pauseIcon="/rolling.png"
              pauseHoverIcon="/rolling.png"
            />
          ],
          picturePlayExample,
          5
        )}


        {/* DEMO 6 */}
        {this.state.renderExamples(
          "Background Picture with Play/Pause Overlay",
          "audio-player-five",
          [
            <AudioPlayer
              audioFiles={[
                {
                  src: "/rollingInTheDeep.mp3"
                }
              ]}
              rearrange={picOverlay}
              playerWidth="10rem"
              width="10rem"
              iconSize="9rem"
            />
          ],
          overlayExample,
          6
        )}
      </div>
    );
  }
}

export default App;
