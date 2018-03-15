import React from 'react'
import Prism from "@maji/react-prism";
import "../Prism/components/prism-jsx";
import "../Prism/components/prism-bash";
import "../Prism/components/prism-javascript"


const Props = (props) => {
  let {addRef} = props;
  return (
    <div className="props" ref={props => addRef(props, 'props')}>
      <h2>Props</h2>
    </div>
  )
}

export default Props