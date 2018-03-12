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
  rollingMP3,
  heyJudeMP3,
  uptownFunkMP3,
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
    this.getFileRef = this.getFileRef.bind(this);
  }

  showCode(e, idx) {
    let currentCodes = this.state.showCode.slice();
    let currentIdx = currentCodes.indexOf(idx);
    currentIdx === -1
      ? currentCodes.push(idx)
      : currentCodes.splice(currentIdx, 1);
    this.setState({ showCode: currentCodes });
  }

  getFileRef(str) {
    return `https://raw.githubusercontent.com/retrofuturejosh/demo-react-modular-audio-player/master/public${str}`
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
              playIcon={this.getFileRef("/playIcon.png")}
              playHoverIcon={this.getFileRef("/playHoverIcon.png")}
              pauseIcon={this.getFileRef("/pauseIcon.png")}
              pauseHoverIcon={this.getFileRef("/pauseIcon.png")}
              rewindIcon={this.getFileRef("/rewindIcon.png")}
              rewindHoverIcon={this.getFileRef("/rewindHoverIcon.png")}
              forwardIcon={this.getFileRef("/forwardIcon.png")}
              forwardHoverIcon={this.getFileRef("/forwardHoverIcon.png")}
              volumeIcon={this.getFileRef("/volumeIcon.png")}
              volumeEngagedIcon={this.getFileRef("/volumeIcon.png")}
              muteIcon={this.getFileRef("/muteIcon.png")}
              muteEngagedIcon={this.getFileRef("/muteIcon.png")}
              loopIcon={this.getFileRef("/loopIcon.png")}
              loopEngagedIcon={this.getFileRef("/loopEngagedIcon.png")}
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
                  src: heyJudeMP3,
                  title: "Hey Jude",
                  artist: "The Beatles"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon={this.getFileRef("/beatlesPic.png")}
              playHoverIcon={this.getFileRef("/beatlesPic.png")}
              pauseIcon={this.getFileRef("/beatlesPic.png")}
              pauseHoverIcon={this.getFileRef("beatlesPic.png")}
            />,
            <AudioPlayer
              audioFiles={[
                {
                  src: uptownFunkMP3,
                  title: "Uptown Funk ft. Bruno Mars",
                  artist: "Mark Ronson"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon={this.getFileRef("/upTownFunk.png")}
              playHoverIcon={this.getFileRef("/upTownFunk.png")}
              pauseIcon={this.getFileRef("/upTownFunk.png")}
              pauseHoverIcon={this.getFileRef("/upTownFunk.png")}
            />,
            <AudioPlayer
              audioFiles={[
                {
                  src: rollingMP3,
                  title: "Rolling In The Deep",
                  artist: "Adele"
                }
              ]}
              rearrange={picRearrange}
              playerWidth="10rem"
              iconSize="10rem"
              playIcon={this.getFileRef("/rolling.png")}
              playHoverIcon={this.getFileRef("/rolling.png")}
              pauseIcon={this.getFileRef("/rolling.png")}
              pauseHoverIcon={this.getFileRef("/rolling.png")}
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
                  src: rollingMP3
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
