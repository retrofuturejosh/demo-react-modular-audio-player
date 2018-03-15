import React from "react";

export default function renderExample(
  exampleName,
  className,
  componentArr,
  codeSnippet,
  idx
) {
  return (
    <div className="demo-audio-player">
      <div className="demo-title">
        <h2> {exampleName} </h2>
      </div>
      <div className="audio-player-example">
        <div className={className}>
          {componentArr.map((component, idx) => {
            return (<div id="key-wrapper" key={`exammple-${idx}`}>
              {component}
          </div>);
          })}
        </div>
      </div>
      {this.renderCodeHeader(idx)}
      <div className="demo-code">
        {this.state.showCode.includes(idx) ? <pre> {codeSnippet} </pre> : null}
      </div>
    </div>
  );
}
