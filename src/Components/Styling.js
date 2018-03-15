import React from "react";
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript";

import { defaultWithStyle } from "./utils/exampleCode";

const Styling = props => {
  let { addRef } = props;
  return (
    <div className="styling" ref={styling => addRef(styling, "styling")}>
      <h2>Styling</h2>
      <h3 className="indent" ref={mainStyle => addRef(mainStyle, "mainStyle")}>
        AudioPlayer Component
      </h3>
      <div className="text">
        To style the whole AudioPlayer component, you can target the class
        'audio-player'.
        <Prism language={"css"}>{defaultWithStyle}</Prism>
      </div>
      <h3 className="indent" ref={icons => addRef(icons, "icons")}>
        Icons
      </h3>
      <div className="text">
        The icon sizes are set by the iconSize prop, but individual icon sizes
        and styling can be overwritten by the following selectors.
        <div id="icons-table">
          <table>
            <thead>
              <tr>
                <th>Selector</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> #play-icon</td>
                <td> requires !important attribute, includes pause icon</td>
              </tr>
              <tr className="even-row">
                <td> #rewind-icon</td>
                <td>requires !important attribute </td>
              </tr>
              <tr>
                <td> #forward-icon</td>
                <td> requires !important attribute</td>
              </tr>
              <tr className="even-row">
                <td> #volume-icon</td>
                <td> requires !important attribute</td>
              </tr>
              <tr>
                <td> #loop-icon</td>
                <td> requires !important attribute</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="indent" ref={range => addRef(range, "range")}>
        Range Inputs
      </h3>
      <div className="text">
      To style the range-input for the volume and seek subcomponents, provide a class selector name for the sliderClass prop (don't use 'slider', which will have the default styling). I recommend using <a id="a-blue" href="http://danielstern.ca/range.css/#/"> http://danielstern.ca/range.css/#/ </a> to generate your desired slider style. You can include the class name you provided  as the sliderClass prop in the Namespace input at the bottom of the page under 'General'. Copy the generated code into your style sheet and Voila!, a new slider style. 
      </div>
      <Prism language="jsx">
        {`//inside Component's render()
<AudioPlayer
  sliderClass="my-slider"/>`}
      </Prism>
      <div className="text">
        CSS
      </div>
      <Prism language="css">
        {`input[type=range].my-slider {
  //style
}
input[type=range].my-slider:focus {
  //style
}
input[type=range].my-slider::-webkit-slider-runnable-track {
  //style
}
input[type=range].my-slider::-webkit-slider-thumb {
  //style
}
input[type=range].my-slider:focus::-webkit-slider-runnable-track {
  //style
}
input[type=range].my-slider::-moz-range-track {
  //style
}
input[type=range].my-slider::-moz-range-thumb {
  //style
}
input[type=range].my-slider::-ms-track {
  //style
}
input[type=range].my-slider::-ms-fill-lower {
  //style
}
input[type=range].my-slider::-ms-fill-upper {
  //style
}
input[type=range].my-slider::-ms-thumb {
  //style
}
input[type=range].my-slider:focus::-ms-fill-lower {
  //style
}
input[type=range].my-slider:focus::-ms-fill-upper {
  //style
}`}
      </Prism>
    </div>
  );
};

export default Styling;
