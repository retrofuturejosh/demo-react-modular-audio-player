import React from "react";
import Prism from "@maji/react-prism";
import AudioPlayer from "react-modular-audio-player";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript";

import {audioFiles} from './utils/setUp'

const Rearrange = props => {
  let { addRef } = props;
  let rearrangedPlayer = [
    {
      className: "tier-top",
      style: { margin: "0.3rem" },
      innerComponents: [
        {
          type: "play",
          style: { width: "fit-content" }
        },
        {
          type: "rewind",
          style: { width: "fit-content" }
        },
        {
          type: "forward",
          style: { width: "fit-content" }
        },
        {
          type: "volume"
        }
      ]
    },
    {
      className: "tier-bottom",
      style: { margin: "0rem 0.3rem 0.3rem 0.3rem" },
      innerComponents: [
        {
          type: "time",
          style: { width: "fit-content" }
        },
        {
          type: "seek"
        }
      ]
    }
  ];
  return (
    <div
      className="rearrange"
      ref={rearrange => addRef(rearrange, "rearrange")}
    >
      <h2>Rearrange Prop</h2>
      <div className="text">
        The rearrange prop allows you to render subcomponents in any order you
        wish. It also allows you to build your audioplayer in multiple columns
        called tiers, containing an array of innerComponents which arrange the desired subcomponents.
      </div>

      <h3
        className="indent"
        ref={subcomponents => addRef(subcomponents, "subcomponents")}
      >
        Subcomponents
      </h3>
      <div className="text">
        The rearrange prop allows you to arrange the following subcomponents within a tier object's innerComponents array.
        All of these subcomponents are referenced by a string name. Pass the subcomponent's string name as the value for 'type' within each individual innerComponent object.
      </div>
      <div id="subcomponent-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"play"</td>
              <td>renders the play icon</td>
            </tr>
            <tr className="even-row">
              <td>"rewind"</td>
              <td> renders the rewind/previous icon </td>
            </tr>
            <tr>
              <td>"forward"</td>
              <td>renders the skip/forward icon</td>
            </tr>
            <tr className="even-row">
              <td>"loop"</td>
              <td>renders the loop icon</td>
            </tr>
            <tr>
              <td>"name"</td>
              <td>renders the scrolling title/artist marquee</td>
            </tr>
            <tr className="even-row">
              <td>"time"</td>
              <td>renders the current time/duration</td>
            </tr>
            <tr>
              <td>"seek"</td>
              <td>renders the seeking range input</td>
            </tr>
            <tr className="even-row">
              <td>"volume"</td>
              <td>
                renders the volume/mute icon and corresponding range input
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        className="indent"
        ref={tierObject => addRef(tierObject, "tierObject")}
      >
        Tier Object
      </h3>
      <div className="text">
        The rearrange prop accepts an array of objects, representing tiers. The
        tier object follows the pattern below.
      </div>
      <Prism language="javascript">
        {`//Single Tier Object Shape
{
  className: "string",
  style: {JSXstyleElement: "value"},
  innerComponents: [
    {
      type: "subcomponent string name",
      style: {JSXstyleElement: "value", JSXstyleElement: "value"}
    },
    {
      type: "another subcomponent string name",
      style: {JSXstyleElement: "value"}
    },
  ]
}`}
      </Prism>

      <h3
        className="indent"
        ref={tierExample => addRef(tierExample, "tierExample")}
      >
        Tier Example
      </h3>
      <div className="text">
        Below is an example tier rendering the play icon and volume icon/range
        input with comments.
      </div>
      <Prism language="javascript">
        {`{
  //className supplies a CSS class to the div containing the given subcomponents
  className: "first-tier",

  //style is an optional property
  //style appends and rewrites the default styling options for the current tier
  //style accepts an object with any JSX inline style properties
  style: {marginBottom: "0.3em"}

  //innerComponents is an array of objects that arrange the desired subcomponents
  innerComponents: [
    {
      //type is a string that will render a specific subcomponent
      type: "play",

      //style is an optional property
      //style appends and rewrites the default styling options for the div containing the subcomponent
      //style accepts an object with any JSX inline style properties
      style: {width: "fit-content"}
    },
    {
      type: "volume"
    }
  ]
}`}
      </Prism>

      <h3
        className="indent"
        ref={rearrangeStyle => addRef(rearrangeStyle, "rearrangeStyle")}
      >
        Rearrange Styling
      </h3>
      <div className="text">
        Tiers have two default inline style properties, tier and innerComponent.
        Both of these JSX inline styles can be appended or rewritten with the
        style properties available within the rearrange prop.
      </div>

      <h3
        className="double-indent"
        ref={tierStyle => addRef(tierStyle, "tierStyle")}
      >
        Default Tier Styling
      </h3>
      <div className="text">
        The tier div itself, which contains all the tier's innerComponents, has
        the following default style.
      </div>
      <Prism language="css">
        {`defaultTierStyle {
  display: "flex", 
  flexDirection: "row", 
  justifyContent: "left",
  alignContent: "left",
  width: "100%"
}`}
      </Prism>

      <h3
        className="double-indent"
        ref={innerComponentStyle =>
          addRef(innerComponentStyle, "innerComponentStyle")
        }
      >
        Default innerComponent Styling
      </h3>
      <div className="text">
        The innerComponent div, which contains a specific subcomponent, has the
        following default style.
      </div>
      <Prism language="css">
        {`defaultInnerComponentStyle {
  display: "flex", 
  alignItems: "center", 
  justifyContent: "left",
  width: "100%" 
}`}
      </Prism>

      <h3
        className="indent"
        ref={rearrangeExample => addRef(rearrangeExample, "rearrangeExample")}
      >
        Rearrange Example
      </h3>
      <div className="text">
        Below is an example of a custom arranged AudioPlayer with two tiers. The
        first tier's innerComponents contains the play, rewind, forward, and volume
        subcomponents. The second tier's innerComponents contains the time and seek
        subcomponents. It appears like this:
        <div id="rearrange-doc-example">
          <AudioPlayer
            rearrange={rearrangedPlayer}
            audioFiles={audioFiles}
            playerWidth="10em"
            fontSize="1.5rem"
            iconSize="1.5rem"
          />
        </div>
      </div>

      <Prism language="jsx">
        {`let rearrangedPlayer = [
  {
    className: "tier-top",
    style: {margin: "0.3rem"},
    innerComponents: [
      { 
        type: "play",
        style: {width: "fit-content"}
      },
      {
        type: "rewind",
        style: {width: "fit-content"}
      },
      {
        type: "forward",
        style: {width: "fit-content"}
      },
      {
        type: "volume"
      }
    ]
  },
  {
    className: "tier-bottom",
    style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
    innerComponents: [
      {
        type: "time",
        style: {width: "fit-content"}
      },
      {
        type: "seek"
      }
    ]
  }
]

//inside Component's render()
<AudioPlayer
  rearrange={rearrangedPlayer}
  audioFiles={anArrayOfAudioFileObjects}
  playerWidth="10em"
  fontSize="1.5rem"
  iconSize="1.5rem"
/>`}
      </Prism>
    </div>
  );
};

export default Rearrange;
