import React from 'react'
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript"


const Rearrange = (props) => {
  let {addRef} = props;
  return (
    <div className="rearrange" ref={rearrange => addRef(rearrange, 'rearrange')}>
      <h2>Rearrange Prop</h2>
      <h3 className="indent" ref={subcomponents => addRef(subcomponents, 'subcomponents')}>Subcomponents</h3>
      <h3 className="indent" ref={tierObject => addRef(tierObject, 'tierObject')}>Tier Object</h3>
      <h3 className="indent" ref={tierExample => addRef(tierExample, 'tierExample')}>Tier Example</h3>
      <h3 className="indent" ref={rearrangeStyle => addRef(rearrangeStyle, 'rearrangeStyle')}>Rearrange Styling</h3>
      <h3 className="double-indent" ref={tierStyle => addRef(tierStyle, 'tierStyle')}>Default Tier Styling</h3>
      <h3 className="double-indent" ref={innerComponentStyle => addRef(innerComponentStyle, 'innerComponentStyle')}>Default innerComponent Styling</h3>
      <h3 className="indent" ref={rearrangeExample => addRef(rearrangeExample, 'rearrangeExample')}>Rearrange Example</h3>
    </div>
  )
}

export default Rearrange