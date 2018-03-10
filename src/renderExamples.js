import React from "react";

export default function renderExample(exampleName, className, component, codeSnippet, idx) {
  return (
    <div className="demo-audio-player">
      <div className="demo-title">
        <h3> {exampleName} </h3>
      </div>
      <div className={className}>
       {component}
      </div>
      {this.renderCodeHeader(idx)}
      <div className="demo-code" onClick={e => this.showCode(e, idx)}>
        {this.state.showCode.includes(idx)
        ? (<pre> {codeSnippet} </pre>) 
        : null}
      </div>
    </div>
  )
}