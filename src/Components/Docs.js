import React, { Component } from "react";

import TableOfContents from "./TableOfContents";
import Setup from "./Setup";

export default class Docs extends Component {
  constructor() {
    super();
    this.scrollTo = this.scrollTo.bind(this);
    this.addRef = this.addRef.bind(this);
  }

  scrollTo(scrollToLocation) {
    this[scrollToLocation].scrollIntoView(true);
  }

  addRef(ref, name) {
    this[name] = ref;
  }

  render() {
    return (
      <div className="docs">
        <TableOfContents scroll={this.scrollTo} />
        <Setup addRef={this.addRef}/>

        <div
          className="props"
          ref={props => {
            this.props = props;
          }}
        >
          PROPS
        </div>

        <div
          className="rearrange"
          ref={rearrange => {
            this.rearrange = rearrange;
          }}
        >
          REARRANGE
        </div>

        <div
          className="styling"
          ref={styling => {
            this.styling = styling;
          }}
        >
          STYLING
        </div>
      </div>
    );
  }
}
