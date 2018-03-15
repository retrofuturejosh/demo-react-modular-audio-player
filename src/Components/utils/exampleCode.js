let setUp = 
`//inside Component
import AudioPlayer from "react-modular-audio-player";

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
];

`;
let defaultPlayer = setUp + 
`//inside Component render()
<AudioPlayer
  audioFiles={audioFiles}/>`,
  defaultWithStyle =
  `.audio-player {
  background-color: #b7b7b7;
  padding: 0.5rem;
  border-radius: 10px;
  filter: invert(100%);
}
`;
let rearrangeJSX = setUp + 
`
//for rearrange prop
let iconStyle = { width: "fit-content" },
  rearrangedPlayer = [
    {
      className: "tier-top",
      style: { padding: "5px 0" },
      innerComponents: [
        {
          type: "play",
          style: iconStyle
        },
        {
          type: "rewind",
          style: iconStyle
        },
        {
          type: "forward",
          style: iconStyle
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      innerComponents: [
        {
          type: "time",
          style: iconStyle
        },
        {
          type: "seek"
        }
      ]
    }
  ];
  
//inside Component render()
<AudioPlayer 
  audioFiles={audioFiles}
  rearrange={rearrangedPlayer}
  playerWidth="10rem"
  iconSize="1.5rem"
  fontSize="1rem"
  sliderClass="invert-blue-grey"/>`;
let rearrangeStyle = 
`//in css file
.audio-player-two {
  filter: invert(100%);
  background-color: #9d9c9c;
  padding: 0.2rem;
  border-radius: 5px; }

.audio-player-two img {
  background-color: #bd7a00;
  border-radius: 1rem;
  z-index: 2; }

input[type=range].invert-blue-grey {
  -webkit-appearance: none;
  width: 100%;
  margin: 5px 0; }
input[type=range].invert-blue-grey:focus {
  outline: none; }
input[type=range].invert-blue-grey::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #000000;
  border-radius: 0px;
  border: 0px solid #000000; }
input[type=range].invert-blue-grey::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 11px;
  width: 11px;
  border-radius: 50px;
  background: #bd7a00;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px; }
input[type=range].invert-blue-grey::-webkit-slider-thumb:hover {
  background: black; }
input[type=range].invert-blue-grey:focus::-webkit-slider-runnable-track {
  background: #000000; }
input[type=range].invert-blue-grey::-moz-range-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #000000;
  border-radius: 0px;
  border: 0px solid #000000; }
input[type=range].invert-blue-grey::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 11px;
  width: 11px;
  border-radius: 50px;
  background: #bd7a00;
  cursor: pointer; }
input[type=range].invert-blue-grey::-moz-range-thumb:hover {
  background: black; }
input[type=range].invert-blue-grey::-ms-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent; }
input[type=range].invert-blue-grey::-ms-fill-lower {
  background: #000000;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; }
input[type=range].invert-blue-grey::-ms-fill-upper {
  background: #000000;
  border: 0px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d; }
input[type=range].invert-blue-grey::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 1px solid #000000;
  height: 11px;
  width: 11px;
  border-radius: 50px;
  background: #bd7a00;
  cursor: pointer;
  height: 1px; }
input[type=range].invert-blue-grey::-ms-thumb:hover {
  background: black; }
input[type=range].invert-blue-grey:focus::-ms-fill-lower {
  background: #000000; }
input[type=range].invert-blue-grey:focus::-ms-fill-upper {
  background: #000000; }
`;
let picturePlayJSX = 
`//inside Component (using The Beatles - Hey Jude as example) 
import AudioPlayer from "react-modular-audio-player";

let rearrangedPlayer = [
  {
    className: "beatles",
    style: { cursor: "pointer" },
    innerComponents: [
      {
        type: "play"
      }
    ]
  }
];

//inside Component render()
<AudioPlayer
  audioFiles={[
    {
      src: "/heyJude.mp3",
      title: "Hey Jude",
      artist: "The Beatles"
    }
  ]}
  rearrange={rearrangedPlayer}
  playerWidth="10rem"
  iconSize="10rem"
  playIcon="/beatlesPic.png"
  playHoverIcon="/beatlesPic.png"
  pauseIcon="/beatlesPic.png"
  pauseHoverIcon="beatlesPic.png"
/>
`;
let customIconJSX = setUp + 
`//for rearrange prop
let rearrangedPlayer = [
  {
    className: "top",
    style: { marginBottom: "0.2rem" },
    innerComponents: [
      {
        type: "name",
        style: { width: "58%" }
      },
      {
        type: "time",
        style: { justifyContent: "flex-end" }
      }
    ]
  },
  {
    className: "bottom",
    innerComponents: [
      {
        type: "play",
        style: { width: "12.5%", justifyContent: "flex-end" }
      },
      {
        type: "rewind",
        style: { width: "12.5%", justifyContent: "flex-end" }
      },
      {
        type: "forward",
        style: { width: "12.5%" }
      },
      {
        type: "loop",
        style: { width: "12.5%" }
      },
      {
        type: "volume",
        style: { width: "48%" }
      }
    ]
  }
];

//inside Component render()
<AudioPlayer
  audioFiles={audioFiles}
  rearrange={rearrangedPlayer}
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
/>`;

let customIconCSS =
`.audio-player {
  background-color: #cfcccc;
  padding: 0.2rem;
  border: solid 1px;
  box-shadow: 2px 2px 15px black;
}

//an example of how to target style of certain icons
#play-icon {
  height: 0.77rem !important;
}
#loop-icon {
  height: 0.9rem !important;
}
`;

let overlayJSX = 
`//inside Component
import AudioPlayer from "react-modular-audio-player";

//for rearrange prop
let rearrangedPlayer = [
  {
    className: "adele",
    innerComponents: [
      {
        type: "play",
        style: {
          width: "100%",
          justifyContent: "center",
          filter: "invert(100%)",
          opacity: "0.4"
        }
      }
    ]
  }
];

//inside Component render()
<AudioPlayer
  audioFiles={[
    {
      src: "/rollingInTheDeep.mp3",
      title: "Rolling In The Deep",
      artist: "Adele"
    }
  ]}
  rearrange={rearrangedPlayer}
  playerWidth="10rem"
  iconSize="9rem"
/>`;

let overlayCSS =
`.audio-player {
  background: url('/rolling.png');
  height: 10rem;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#play {
  cursor: pointer;
}`

export {
  setUp,
  defaultPlayer,
  defaultWithStyle,
  rearrangeJSX,
  rearrangeStyle,
  picturePlayJSX,
  customIconJSX,
  customIconCSS,
  overlayJSX,
  overlayCSS
};
