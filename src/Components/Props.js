import React from "react";

const Props = props => {
  let { addRef } = props;
  return (
    <div className="props" ref={propsExample => addRef(propsExample, "propsExample")}>
      <h2>Props</h2>
      <table>
        <thead>
          <tr>
            <th id="prop-name">Prop Name</th>
            <th id="value-type">Value Type</th>
            <th id="default-value">Default Value</th>
            <th id="is-required">isRequired</th>
            <th id="explanation">Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>audioFiles</td>
            <td>array of object</td>
            <td>no default value</td>
            <td>yes</td>
            <td>
              array of audioFile objects following the pattern{" "}
              {` { src: "/required string pointing to audio file", title: "optional title of track", artist: "optional artist name" }`}
            </td>
          </tr>
          <tr className="even-row">
            <td>rearrange</td>
            <td>array of objects</td>
            <td>no default value</td>
            <td>no</td>
            <td>see more information about rearrange prop below</td>
          </tr>
          <tr>
            <td>playerWidth</td>
            <td>string</td>
            <td>"20rem"</td>
            <td>no</td>
            <td>
              sets the width of the player, can be set to any acceptable css
              unit
            </td>
          </tr>
          <tr className="even-row">
            <td>hideSeeking</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>prevents the seeking bar from being rendered</td>
          </tr>
          <tr>
            <td>hideForward</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>prevents the skip forward icon from being rendered</td>
          </tr>
          <tr className="even-row">
            <td>hideLoop</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>prevents the loop current track icon from being rendered</td>
          </tr>
          <tr>
            <td>hideRewind</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>prevents the rewind/previous icon from being rendered</td>
          </tr>
          <tr className="even-row">
            <td>hideTime</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>revents the current time/duration from being rendered</td>
          </tr>
          <tr>
            <td>hideName</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>
              prevents the scrolling marquee that displays track name and artist
              from being rendered
            </td>
          </tr>
          <tr className="even-row">
            <td>loopPlaylist</td>
            <td>bool</td>
            <td>false</td>
            <td>no</td>
            <td>
              causes the playlist to continue playing again after the last track
              finishes
            </td>
          </tr>
          <tr>
            <td>sliderClass</td>
            <td>string</td>
            <td>"slider"</td>
            <td>no</td>
            <td>
              sets the className of the volume and seeking input range elements
              for easier css styling
            </td>
          </tr>
          <tr className="even-row">
            <td>playIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default initial play icon
            </td>
          </tr>
          <tr>
            <td>playHoverIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the play icon when mouse is hovering, note: enter the same string
              as playIcon if you don't want the icon to change when hovering
            </td>
          </tr>
          <tr className="even-row">
            <td>pauseIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default pause icon
            </td>
          </tr>
          <tr>
            <td>pauseHoverIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the pause icon when mouse is hovering, note: enter the same string
              as pauseIcon if you don't want the icon to change when hovering
            </td>
          </tr>
          <tr className="even-row">
            <td>forwardIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default forward icon
            </td>
          </tr>
          <tr>
            <td>forwardHoverIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the forward icon when mouse is hovering, note: enter the same
              string as forwardIcon if you don't want the icon to change when
              hovering
            </td>
          </tr>
          <tr className="even-row">
            <td>rewindIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default rewind icon
            </td>
          </tr>
          <tr>
            <td>rewindHoverIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the rewind icon when mouse is hovering, note: enter the same
              string as rewindIcon if you don't want the icon to change when
              hovering
            </td>
          </tr>
          <tr className="even-row">
            <td>volumeIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default volume icon when track is not playing
            </td>
          </tr>
          <tr>
            <td>volumeEngagedIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the volume icon when track is playing, note: enter the same string
              as volumeIcon if you don't want the icon to change when track is
              playing
            </td>
          </tr>
          <tr className="even-row">
            <td>muteIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default mute icon when track is not playing
            </td>
          </tr>
          <tr>
            <td>muteEngagedIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the mute icon when track is playing, note: enter the same string
              as muteIcon if you don't want the icon to change when track is
              playing
            </td>
          </tr>
          <tr className="even-row">
            <td>loopIcon</td>
            <td>string</td>
            <td>included in module</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the default loop icon
            </td>
          </tr>
          <tr>
            <td>loopEngagedIcon</td>
            <td>string</td>
            <td>included in modul</td>
            <td>no</td>
            <td>
              accepts a string referencing an img src that will be rendered as
              the loop icon when looping is engaged or mouse is hovering over
              default loop icon
            </td>
          </tr>
          <tr className="even-row">
            <td>iconSize</td>
            <td>string</td>
            <td>"1rem"</td>
            <td>no</td>
            <td>
              can be set to any acceptable css unit, icon images' heights are
              set to size entered, widths are set to auto
            </td>
          </tr>
          <tr>
            <td>fontFamily</td>
            <td>string</td>
            <td>"sans-serif"</td>
            <td>no</td>
            <td>
              can be set to any acceptable css font-family, changes font of the
              scrolling title/artist marquee and time/duration
            </td>
          </tr>
          <tr className="even-row">
            <td>fontWeight</td>
            <td>string</td>
            <td>"100"</td>
            <td>no</td>
            <td>
              can be set to any acceptable css font-weight, changes font-weight
              of the scrolling title/artist marquee and time/duration
            </td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>string</td>
            <td>"small"</td>
            <td>no</td>
            <td>
              can be set to any acceptable css font-size, changes font-size of
              the scrolling title/artist marquee and time/duration
            </td>
          </tr>
          <tr className="even-row">
            <td>fontColor</td>
            <td>string</td>
            <td>"black"</td>
            <td>no</td>
            <td>
              can be set to any acceptable css color, changes color of the
              scrolling title/artist marquee and time/duration fonts
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Props;
