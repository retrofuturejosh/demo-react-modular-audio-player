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
        <h3> {exampleName} </h3>
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
      <div className="demo-code" onClick={e => this.showCode(e, idx)}>
        {this.state.showCode.includes(idx) ? <pre> {codeSnippet} </pre> : null}
      </div>
    </div>
  );
}
