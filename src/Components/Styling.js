import React from 'react'
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript"


const Styling = (props) => {
  let {addRef} = props;
  return (
    <div className="styling" ref={styling => addRef(styling, 'styling')}>
      <h2>Styling</h2>
      <h3 className="indent" ref={mainStyle => addRef(mainStyle, 'mainStyle')}>AudioPlayer Component</h3>
      <h3 className="indent" ref={icons => addRef(icons, 'icons')}>Icons</h3>
      <h3 className="indent" ref={range => addRef(range, 'range')}>Range Inputs</h3>
    </div>
  )
}

export default Styling