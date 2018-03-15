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
      <h3 ref={subcomponents => addRef(subcomponents, 'subcomponents')}>Subcomponents</h3>
      <h3 ref={tierObject => addRef(tierObject, 'tierObject')}>Tier Object</h3>
      <h3 ref={tierExample => addRef(tierExample, 'tierExample')}>Tier Example</h3>
      <h3 ref={rearrangeStyle => addRef(rearrangeStyle, 'rearrangeStyle')}>Rearrange Styling</h3>
      <h3 ref={tierStyle => addRef(tierStyle, 'tierStyle')}>Default Tier Styling</h3>
      <h3 ref={innerComponentStyle => addRef(innerComponentStyle, 'innerComponentStyle')}>Default innerComponent Styling</h3>
      <h3 ref={rearrangeExample => addRef(rearrangeExample, 'rearrangeExample')}>Rearrange Example</h3>
    </div>
  )
}

export default Rearrange