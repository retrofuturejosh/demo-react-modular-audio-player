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
]
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
}`

const examples =  {
  defaultPlayer,
  defaultWithStyle
}

export default examples;