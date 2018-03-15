import React from "react";
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript"

const Setup = (props) => {
  let {addRef} = props;
  return (
    <div className="setup" ref={setup => addRef(setup, 'setup')}>
      <h2> Setup </h2>
      <div className="text">Install 'react-modular-audio-player'.</div>
      <Prism language="bash">{`npm i --save react-modular-audio-player`}</Prism>
      <div className="text">Import the AudioPlayer component.</div>
      <Prism language="javascript">
        {`import AudioPlayer from 'react-modular-audio-player';`}
      </Prism>
      <div className="text">
        The only required prop is an ARRAY of audioFile OBJECTs. Within the audioFile object, only src is required, title and artist are optional. If you only want to include a single piece of text as the name, set it as the title with no artist. The audioFile
        object follows this pattern.
      </div>
      <Prism language="javascript">
        {`[{ src: "link/to/audioFile",
  title: "Toxic",
  artist: "Britney Spears" }];`}
      </Prism>
      <div className="text">
        Now you can use the AudioPlayer component inside your Component's
        render().
      </div>
      <Prism language="jsx">
        {`<AudioPlayer audioFiles={audioFilesArray}>`}
      </Prism>
      <h3 ref={simple => addRef(simple, 'simple')}> Simple Example </h3>
      <Prism language="jsx">
      {`import AudioPlayer from 'react-modular-audio-player';

let playlist = [
  { src: "/music.mp3",
    title: "Song",
    artist: "Singer" },
  { src: "/moreMusic.mp3",
    title: "Another Song",
    artist: "Another Singer" }
];

//inside render() function
<AudioPlayer 
  audioFiles={playlist}
/>`}
      </Prism>
    </div>
  );
};

export default Setup;
