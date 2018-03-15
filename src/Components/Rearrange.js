import React from 'react'
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript"


const Rearrange = (props) => {
  let {addRef} = props;
  return (
    <div className="props" ref={rearrange => addRef(rearrange, 'rearrange')}>
      <h2>Rearrange</h2>
    </div>
  )
}

export default Rearrange