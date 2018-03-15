import React, { Component } from "react";
import AudioPlayer from "react-modular-audio-player";
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-css";
import "../Prism/components/prism-javascript"
import "../Prism/themes/prism.css";

import "../index.css";

import {
  defaultPlayer,
  defaultWithStyle,
  rearrangeJSX,
  rearrangeStyle,
  picturePlayJSX,
  customIconCSS,
  customIconJSX,
  overlayJSX,
  overlayCSS
} from "./utils/exampleCode";
import {
  rollingMP3,
  heyJudeMP3,
  uptownFunkMP3,
  audioFiles,
  rearrangedPlayer,
  picRearrange,
  rearrangedPlayerTwo,
  picOverlay
} from "./utils/setUp";
import renderExamples from "./utils/renderExamples";

class Examples extends Component {
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
    return `https://raw.githubusercontent.com/retrofuturejosh/demo-react-modular-audio-player/master/public${str}`;
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
      <div className="examples">
        {/* DEMO 1 */}
        {this.state.renderExamples(
          "Default Player",
          "audio-player-default",
          [<AudioPlayer audioFiles={audioFiles} />],
          <div>
            <Prism language={"jsx"}>{defaultPlayer}</Prism>
          </div>,
          1
        )}

        {/* DEMO 2 */}
        {this.state.renderExamples(
          "Default Player with Styling",
          "audio-player-one",
          [<AudioPlayer audioFiles={audioFiles} />],
          <div>
            <Prism language={"jsx"}>{defaultPlayer}</Prism>
            <span className="directions"> CSS </span>
            <Prism language={"css"}>{defaultWithStyle}</Prism>
          </div>,
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
              playerWidth="10rem"
              iconSize="1.5rem"
              fontSize="1rem"
              sliderClass="invert-blue-grey"
            />
          ],
          <div>
            <Prism language={"jsx"}>{rearrangeJSX}</Prism>
            <span className="directions"> CSS </span>
            <Prism language={"css"}>{rearrangeStyle}</Prism>
          </div>,
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
          <div>
            <Prism language={"jsx"}>{customIconJSX}</Prism>
            <span className="directions"> CSS </span>
            <Prism language={"css"}>{customIconCSS}</Prism>
          </div>,
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
              playIcon={this.getFileRef("/uptownFunk.png")}
              playHoverIcon={this.getFileRef("/uptownFunk.png")}
              pauseIcon={this.getFileRef("/uptownFunk.png")}
              pauseHoverIcon={this.getFileRef("/uptownFunk.png")}
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
          <div>
            <Prism language={"jsx"}>{picturePlayJSX}</Prism>
          </div>,
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
              iconSize="9rem"
            />
          ],
          <div>
            <Prism language={"jsx"}>{overlayJSX}</Prism>
            <span className="directions"> CSS </span>
            <Prism language={"css"}>{overlayCSS}</Prism>
          </div>,
          6
        )}
      </div>
    );
  }
}

export default Examples;
