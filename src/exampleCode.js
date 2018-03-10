let setUp =`
//in component
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
`,
defaultPlayer = setUp + `
//in component render()
<AudioPlayer
    audioFiles={audioFiles}
/>`,
defaultWithStyle = setUp + `
//in component render()
<AudioPlayer
   audioFiles={audioFiles}
/>


//in css file
.audio-player {
  background-color: #b7b7b7;
  padding: 0.5rem;
  border-radius: 10px;
  filter: invert(100%);
}`,
rearrangeExample = setUp + `
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
      style: { padding: "5px 0" },
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

//in component render()
<AudioPlayer 
  audioFiles={audioFiles}
  rearrange={rearrangedPlayer}
  playerWidth={"15rem"} 
  iconSize="2rem"
  fontSize="1.5rem"
  sliderClass="invert-blue-grey"/>


//in scss file (this style is best achieved with sass)
.audio-player-two {
  filter: invert(100%);
  background-color: rgb(176, 176, 176);
  padding: 0.2rem;
  transform: scale(0.7);
  img {
    background-color: orange;
    border-radius: 1rem;
    z-index: 2;
  }
}

input[type=range].invert-blue-grey {
  -webkit-appearance: none;
  width: 100%;
  margin: 3.95px 0 3.95px -2px;
}
input[type=range].invert-blue-grey:focus {
  outline: none;
}
input[type=range].invert-blue-grey::-webkit-slider-runnable-track {
  width: 100%;
  height: 12.1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ffa500;
  border: 1px solid #000000;
}
input[type=range].invert-blue-grey::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0.9px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #b0b0b0;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -4.95px;
}
input[type=range].invert-blue-grey:focus::-webkit-slider-runnable-track {
  background: #ffa500;
}
input[type=range].invert-blue-grey::-moz-range-track {
  width: 100%;
  height: 12.1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #ffa500;
  border-radius: 0px;
  border: 1px solid #000000;
}
input[type=range].invert-blue-grey::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0.9px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #b0b0b0;
  cursor: pointer;
}
input[type=range].invert-blue-grey::-ms-track {
  width: 100%;
  height: 12.1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range].invert-blue-grey::-ms-fill-lower {
  background: #ffa500;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range].invert-blue-grey::-ms-fill-upper {
  background: #ffa500;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type=range].invert-blue-grey::-ms-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  border: 0.9px solid #000000;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  background: #b0b0b0;
  cursor: pointer;
  height: 12.1px;
}
input[type=range].invert-blue-grey:focus::-ms-fill-lower {
  background: #ffa500;
}
input[type=range].invert-blue-grey:focus::-ms-fill-upper {
  background: #ffa500;
}`

export {
  defaultPlayer,
  defaultWithStyle,
  rearrangeExample
}